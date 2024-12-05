import { useEffect, useRef } from "react";
import { useSettingStore } from "@/stores/useSettingStore";
import { AUDIO_FILES } from "@/constants/audio";

type AudioKey = keyof typeof AUDIO_FILES;

export const useAudio = () => {
  const audioRefs = useRef<Record<AudioKey, HTMLAudioElement>>(
    {} as Record<AudioKey, HTMLAudioElement>
  );
  const { isMuted } = useSettingStore();

  useEffect(() => {
    // Preload all audio files
    Object.entries(AUDIO_FILES).forEach(([key, path]) => {
      const audio = new Audio(path);
      audio.volume = 0.2;
      audio.preload = "auto";
      audioRefs.current[key as AudioKey] = audio;
    });

    // Cleanup function
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const playSound = (key: AudioKey) => {
    if (isMuted) return;

    const audio = audioRefs.current[key];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return { playSound };
};
