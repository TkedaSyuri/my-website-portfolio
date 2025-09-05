"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import GrassPlane from "./Object/GrassPlane";
import StonePlane from "./Object/StonePlane";
import { Fireflies } from "./Object/Fireflies";
import GeoTree from "./Object/GeoTree";
import { ClicketSound } from "./Object/ClicketSound";
import { Preload } from '@react-three/drei'
import BornFire from "./Object/BornFire/BornFire";
import { FireSound } from "./Object/BornFire/FireSound";

const SceneCanvas: React.FC = () => {
  const controlsRef = useRef<ThreeOrbitControls>(null!);

  return (
    <div className="w-full h-screen  absolute inset-0 z-10">
      <Canvas>
        <Preload all />
        <PerspectiveCamera
          makeDefault
          position={[6, 3, 4]}
          fov={60}
          near={0.1}
          far={1000}
        />

        <ambientLight intensity={0.1} />
        <BornFire />
        <StonePlane />
        <GrassPlane />
        <Fireflies />
        <GeoTree />
        {/* 焚き火の音 */}
        <FireSound url="/sounds/fire_sound.mp3" />
        <ClicketSound url="/sounds/cricket_sound.mp3" />
        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={-0.4}
          enableDamping
          dampingFactor={0.1}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enableZoom
          minDistance={5}
          maxDistance={20}
          zoomSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
