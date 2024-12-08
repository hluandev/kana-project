import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useCallback, useState } from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  keyboardShortcut?: string;
  descTooltip?: string;
  sound?: string;
  hideTooltip?: boolean;
}

export const ActionButton = ({
  icon,
  onClick,
  className,
  keyboardShortcut,
  descTooltip,
  hideTooltip,
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

  const [showTooltip, setShowTooltip] = useState(false);

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
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className={`flex relative items-center border border-black/10 shadow-sm justify-center gap-2 w-9 aspect-square text-center rounded-full duration-200 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute flex text-sm flex-col p-2 gap-2 text-left bottom-10 z-50 left-6  w-32 bg-white  border border-black/10 shadow-sm rounded-xl ${
              hideTooltip ? "hidden" : ""
            }`}
          >
            <div className="font-medium">Shortcut: {keyboardShortcut}</div>
            <div className=" text-neutral-500">{descTooltip}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {icon}
    </div>
  );
};
