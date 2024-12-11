"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div
      className={`lg:w-64 z-10 ${
        pathname.split("/")[3] === "gate1" && "max-lg:hidden hidden"
      } relative h-full lg:p-2 p-1 overflow-hidden`}
    >
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
