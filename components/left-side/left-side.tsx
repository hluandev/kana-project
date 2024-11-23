"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Nav } from "./menu/components/nav";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div className="w-80 z-50 relative p-4  h-full overflow-hidden darkBorder rounded-[14px] bg-[#1a1a1a] shadow-inner-shadow-dark-float">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Nav />}
    </div>
  );
};
