"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div className="w-80 z-50 relative h-full bg-white/50 p-3 rounded-[14px] overflow-hidden">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
