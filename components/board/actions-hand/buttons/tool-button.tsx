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
        <div className="absolute top-1/2 -translate-y-1/2 -left-28 w-24   p-2 rounded-md bg-black/80 backdrop-blur-xl">
          <p className="font-medium">Shortcut: {keyboardShortcut}</p>
          <p>{label}</p>
        </div>
      )}

      <button
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onClick={handleClick}
        className={`${
          isActive ? "bg-black/80 " : "bg-black text-white"
        } rounded-xl  text-[0.6rem] backdrop-blur-xl  font-bold   duration-300 lg:h-11 lg:w-11 h-8 w-8 flex items-center justify-center`}
      >
        {icon}
      </button>
    </div>
  );
};
