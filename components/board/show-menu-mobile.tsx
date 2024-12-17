import { Menu } from "lucide-react";

interface ShowMenuMobileProps {
  onClick: () => void;
  isActive: boolean;
}

export const ShowMenuMobile = ({ onClick, isActive }: ShowMenuMobileProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? "bg-black text-white" : "bg-white text-black"
      } rounded-xl text-xs lg:   lg:h-11 lg:w-11 h-8 w-8 flex items-center justify-center`}
    >
      <Menu className="w-4 h-4" />
    </div>
  );
};
