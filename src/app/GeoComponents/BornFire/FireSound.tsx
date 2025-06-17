"use client";

import React, { useEffect, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import type { PositionalAudio as PositionalAudioImpl } from "three";

type AudioWithContext = PositionalAudioImpl & { context: AudioContext };

interface FireSoundProps {
  url: string;
  distance?: number;
  volume?: number;
  loop?: boolean;
  position?: [number, number, number];
}

export const FireSound: React.FC<FireSoundProps> = ({
  url,
  distance = 5,
  volume = 0.6,
  loop = true,
  position = [0, 0, 0],
}) => {
  const soundRef = useRef<AudioWithContext>(null!);

  useEffect(() => {
    const handler = async () => {
      const audio = soundRef.current;
      if (!audio) return;

      if (audio.context.state === "suspended") {
        await audio.context.resume();
      }

      audio.setRefDistance(distance);
      audio.setLoop(loop);
      audio.setVolume(volume);

      if (!audio.isPlaying) {
        audio.play();
      }

      // 一度実行したら不要なのでイベントリスナーを外す
      window.removeEventListener("click", handler);
    };

    // 最初のユーザー操作で開始するようにイベントを登録
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, [url, distance, loop, volume]);

  return (
    <group position={position}>
      <PositionalAudio
        ref={soundRef}
        url={url}
        distance={distance}
        loop={loop}
        autoplay={false} // 明示的に false
      />
    </group>
  );
};
