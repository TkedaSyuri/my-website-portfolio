"use client";

import { useProgress } from "@react-three/drei";

export default function LoadingOverlay() {
  const { progress, active } = useProgress();

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <p className="text-2xl font-bold">読み込み中...</p>
      <p>{Math.floor(progress)}%</p>
    </div>
  );
}
