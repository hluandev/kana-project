import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

interface ToolButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  isActive?: boolean;
  label?: string;
  keyboardShortcut?: string;
}

export const ToolButton = ({
  onClick,
  icon,
  isActive = true,
  label,
  keyboardShortcut,
}: ToolButtonProps) => {
  const [tooltip, setTooltip] = useState(false);

  const isMobile = useIsMobile();

  const handleClick = () => {
    onClick?.();
  };

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
    <div className="relative">
      {tooltip && !isMobile && (
        <div className="absolute left-1/2 -translate-x-1/2 w-28 -top-16 p-2 rounded-md bg-black/80 backdrop-blur-xl">
          <p className="font-medium">Shortcut: {keyboardShortcut}</p>
          <p>{label}</p>
        </div>
      )}

      <button
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onClick={handleClick}
        className={`${
          isActive ? "bg-white/15" : "bg-red-600/60"
        } rounded-xl backdrop-blur-xl font-bold duration-200 lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center`}
      >
        {icon}
      </button>
    </div>
  );
};
