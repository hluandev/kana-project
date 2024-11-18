"use client";

import { useEffect, useRef } from "react";

export const AmbientSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/ambient.wav");
      audioRef.current.loop = true;
    }

    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/ambient.wav");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }

    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  }, []);

  return (
    <div onClick={playMusic} className="">
      Play
    </div>
  );
};
