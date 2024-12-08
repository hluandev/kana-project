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
      {tooltip && (
        <div className="absolute top-1/2 -translate-y-1/2 -left-28 w-24 text-sm  p-2 rounded-md bg-white border border-black/15 shadow-sm">
          <p className="font-medium">Shortcut: {keyboardShortcut}</p>
          <p>{label}</p>
        </div>
      )}

      <button
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onClick={handleClick}
        className={`${
          isActive ? "bg-white" : "bg-black text-white"
        } rounded-xl border border-black/15 shadow-sm duration-300 h-11 w-11 flex items-center justify-center`}
      >
        {icon}
      </button>
    </div>
  );
};