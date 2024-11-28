import { ArrowUp } from "lucide-react";
import React, { useEffect, useCallback } from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  keyboardShortcut?: string;
  sound?: string;
}

export const ActionButton = ({
  icon,
  onClick,
  className,
  keyboardShortcut,
  sound,
}: ActionButtonProps) => {
  const playSound = useCallback(() => {
    if (sound) {
      const audio = new Audio(sound);
      audio.volume = 0.5;
      audio
        .play()
        .catch((error) => console.log("Audio playback failed:", error));
    }
  }, [sound]);

  const handleClick = () => {
    playSound();
    onClick?.();
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === keyboardShortcut) {
        playSound();
        onClick?.();
      }
    };

    if (keyboardShortcut) {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [onClick, keyboardShortcut, playSound]);

  return (
    <div
      className={`py-3 flex px-2 items-center justify-center gap-2 w-12 aspect-square text-center rounded-full font-semibold duration-200 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {icon}
    </div>
  );
};
