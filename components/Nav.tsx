import { Swords, ListIcon, Diamond, ListCheck } from "lucide-react";
import { NavButton } from "./NavButton";

export const Nav = () => {
  return (
    <nav className="col-span-2 p-5">
      <div className="w-fit bg-red-600 p-3">
        <img src="/img/logo.svg" className="h-5 " alt="" />
      </div>

      <div className="flex flex-col gap-2 items-start mt-7">
        <NavButton
          text="Tasks"
          icon={<ListCheck className="" strokeWidth={1.6} size={18} />}
          selected={false}
        />
        <NavButton
          text="Anki"
          icon={<Diamond className="" strokeWidth={1.6} size={18} />}
          selected
        />
        <NavButton
          text="Battle"
          icon={
            <Swords className="text-neutral-400" strokeWidth={1.6} size={18} />
          }
          selected={false}
        />
      </div>
    </nav>
  );
};
