import { ArrowUp } from "lucide-react";
import React, { useEffect } from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  keyboardShortcut?: string;
}

export const ActionButton = ({
  icon,
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
      className={`py-3 flex px-2 items-center justify-center gap-2 w-12 aspect-square text-center rounded-full font-semibold duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {icon}
      {/* <p className="bg-black/15 w-6 h-6 rounded-md">{keyboardShortcut}</p> */}
    </div>
  );
};
