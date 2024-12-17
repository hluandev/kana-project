"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";

export const LeftSide = () => {
  const pathname = usePathname();
  const isGatePath = pathname.split("/")[3]?.startsWith("gate");

  return (
    <div
      className={`lg:w-64 z-10 ${
        isGatePath ? "max-lg:hidden hidden" : ""
      } relative lg:h-full lg:p-2 p-1 overflow-hidden`}
    >
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
