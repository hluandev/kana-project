import { Settings, Swords } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  selected: boolean;
  text: string;
  icon?: ReactNode;
}

export const NavButton = ({ selected, text, icon }: Props) => {
  return (
    <button
      className={`p-4 flex items-center border leading-none  w-full ${
        selected
          ? "rounded-md  bg-white/70"
          : "border-transparent text-neutral-400"
      }  font-medium gap-2.5`}
    >
      {icon}
      <p className="">{text}</p>
    </button>
  );
};
