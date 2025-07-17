"use client";

import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type { PointsMaterial } from "three";
import {
  AdditiveBlending,
  BufferAttribute,
  Points as ThreePoints,
  Raycaster,
  Plane,
  Vector3,
} from "three";

export const Fireflies: React.FC = () => {
  const count = 200; // 蛍の数
  const R = 5;     // 中心半径
  const r = 2;     // ランダム半径
  const yVariance = 1.2;
  const scale = 1.3;

  const {
    thetas,
    offsets,
    baseY,
    angSpeed,
    basePositions,
    positions,
  } = useMemo(() => {
    const thetas = new Float32Array(count);
    const offsets = new Float32Array(count);
    const baseY = new Float32Array(count);
    const angSpeed = new Float32Array(count);
    const basePositions = new Float32Array(count * 3); // 元の軌道座標
    const positions = new Float32Array(count * 3);     // 実際の表示座標

    for (let i = 0; i < count; i++) {
      thetas[i] = Math.random() * Math.PI * 2;
      offsets[i] = (Math.random() - 0.5) * r * 2;
      baseY[i] = (Math.random() - 0.5) * yVariance * 2 + 2;
      angSpeed[i] = Math.random() * 0.3 + 0.05;
    }

    return { thetas, offsets, baseY, angSpeed, basePositions, positions };
  }, [count]);

  const pointsRef = useRef<ThreePoints>(null!);
  const matRef = useRef<PointsMaterial>(null!);

  const raycaster = useRef(new Raycaster()).current;
  const plane = useRef(new Plane(new Vector3(0, 0, 1), 0)).current;
  const mouse3D = useRef(new Vector3()).current;

  const { mouse, camera } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, mouse3D);

    const threshold = 2.5;  // 反応距離
    const forceScale = 0.12; // 逃げる強さ
    const returnSpeed = 0.05; // 元の位置に戻る力

    for (let i = 0; i < count; i++) {
      // 円運動とゆらぎでベース位置を計算
      thetas[i] += angSpeed[i] * 0.001;
      const radius = (R + offsets[i]) * scale;

      const baseX = Math.cos(thetas[i]) * radius;
      const baseZ = Math.sin(thetas[i]) * radius;
      const baseYpos = baseY[i] + Math.sin(t * angSpeed[i] * 2) * 0.3;

      const i3 = i * 3;
      basePositions[i3 + 0] = baseX;
      basePositions[i3 + 1] = baseYpos;
      basePositions[i3 + 2] = baseZ;

      // 現在位置を取得（前のフレーム位置 or 初期）
      let x = positions[i3 + 0] || baseX;
      let y = positions[i3 + 1] || baseYpos;
      let z = positions[i3 + 2] || baseZ;

      // 距離計算
      const dx = x - mouse3D.x;
      const dy = y - mouse3D.y;
      const dz = z - mouse3D.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      // カーソルに近いと逃げる
      if (dist < threshold) {
        const factor = (threshold - dist) / threshold;
        const push = forceScale * factor;

        x += (dx / dist) * push;
        y += (dy / dist) * push;
        z += (dz / dist) * push;
      }

      // ベース位置に戻ろうとする（柔らかい力）
      x += (baseX - x) * returnSpeed;
      y += (baseYpos - y) * returnSpeed;
      z += (baseZ - z) * returnSpeed;

      positions[i3 + 0] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }

    // 更新
    const pts = pointsRef.current!;
    const posAttr = pts.geometry.getAttribute("position") as BufferAttribute;
    posAttr.copyArray(positions);
    posAttr.needsUpdate = true;

    const m = matRef.current!;
    m.size = 0.07 + Math.sin(t * 5) * 0.005;
    m.opacity = 0.7 + Math.sin(t * 3) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        ref={matRef}
        color="green"
        size={0.5}
        sizeAttenuation
        transparent
        opacity={1}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </Points>
  );
};
