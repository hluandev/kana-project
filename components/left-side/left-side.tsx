"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div className="w-80 z-50 relative p-3 border border-black/10 h-full overflow-hidden  rounded-[14px] bg-[#fbfaf9] ">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
