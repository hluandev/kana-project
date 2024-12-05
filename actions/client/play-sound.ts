import { AUDIO_FILES } from "@/constants/audio";

type AudioKey = keyof typeof AUDIO_FILES;

export const playSound = (key: AudioKey) => {
  const isMuted = localStorage.getItem("isMuted") === "true";
  if (isMuted) return;

  const audio = new Audio(AUDIO_FILES[key]);
  audio.volume = 0.2;
  audio.play();
};
