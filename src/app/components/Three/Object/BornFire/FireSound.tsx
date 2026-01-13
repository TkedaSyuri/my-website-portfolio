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
  volume = 0.2,
  loop = true,
  position = [0, 0, 0],
}) => {
  const soundRef = useRef<AudioWithContext>(null!);

  useEffect(() => {
    const tryPlay = () => {
      const audio = soundRef.current;
      
      // refがまだ準備できていなければ50ms後に再試行
      if (!audio) {
        setTimeout(tryPlay, 50);
        return;
      }

      // AudioContextがサスペンドされていたら再開
      if (audio.context.state === "suspended") audio.context.resume();

      // パラメータの設定
      audio.setRefDistance(distance); // FireSound特有の距離設定
      audio.setLoop(loop);
      audio.setVolume(volume);

      // すでに鳴っていなければ play() を即実行
      if (!audio.isPlaying) {
        audio.play();
      }
    };

    // クリックイベントを待たずに即時実行
    tryPlay();

  }, [url, distance, loop, volume]);

  return (
    <group position={position}>
      <PositionalAudio
        ref={soundRef}
        url={url}
        distance={distance}
        loop={loop}
        autoplay={false}
      />
    </group>
  );
};