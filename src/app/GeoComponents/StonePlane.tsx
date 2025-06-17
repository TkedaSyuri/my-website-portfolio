"use client";

import React, { useMemo } from "react";
import { Circle, useTexture } from "@react-three/drei";
import { DoubleSide, CanvasTexture } from "three";

const StoneCircle: React.FC = () => {
  const map = useTexture("/textures/drei.jpg");

  // ラジアルグラデのアルファマップを Canvas で生成
  const alphaMap = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    // 中心からエッジへ向かって白→黒（白が不透明、黒が透明）
    const grad = ctx.createRadialGradient(
      size/2, size/2, size * 0.4,   // 内側半径
      size/2, size/2, size/2        // 外側半径
    );
    grad.addColorStop(0,   "rgba(255,255,255,1)");
    grad.addColorStop(1,   "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new CanvasTexture(canvas);
  }, []);

  return (
    <Circle
      args={[2.8, 128]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.2, 0]}
    >
      <meshStandardMaterial
        map={map}
        alphaMap={alphaMap}        // ← ここでフェード用マスクをセット
        transparent                // ← 必須
        side={DoubleSide}
        displacementMap={map}
        displacementScale={0.8}
      />
    </Circle>
  );
};

export default StoneCircle;
