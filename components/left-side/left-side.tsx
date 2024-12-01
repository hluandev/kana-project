"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div className="w-80 z-10 relative h-full bg-white/50 p-4 rounded-2xl overflow-hidden">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
