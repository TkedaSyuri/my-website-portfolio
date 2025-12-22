"use client";

import { useProgress } from "@react-three/drei";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingOverlay() {
  const { progress, active } = useProgress();
  const normalized = Math.min(progress / 100, 1);

  return (
    <motion.div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 transition-opacity duration-700 ${
        active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* 焚き火イラスト */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1], 
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{
          filter: `brightness(${0.5 + normalized * 1.5}) 
                   drop-shadow(0 0 ${10 + normalized * 20}px orange)`,
        }}
      >
        <Image
          src="/images/fire.png"
          alt="焚き火"
          width={200}
          height={200}
          priority
        />
      </motion.div>

      {/* 進捗率 */}
      <p className="text-white text-2xl font-bold mt-4">
        {Math.floor(progress)}%
      </p>
    </motion.div>
  );
}
