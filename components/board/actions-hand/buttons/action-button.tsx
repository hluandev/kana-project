import React, { useEffect } from "react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  keyboardShortcut?: string;
}

export const ActionButton = ({
  text,
  onClick,
  className,
  keyboardShortcut,
}: ActionButtonProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === keyboardShortcut) {
        onClick?.();
      }
    };

    if (keyboardShortcut) {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [onClick, keyboardShortcut]);

  return (
    <div
      className={`py-3 flex px-2 items-center justify-center gap-2 w-36 text-center rounded-md font-semibold duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <p> {text}</p>
      <p className="bg-white/30 w-6 h-6 rounded-md">{keyboardShortcut}</p>
    </div>
  );
};
