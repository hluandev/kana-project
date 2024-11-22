"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Nav } from "./menu/components/nav";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div className="w-80 border border-[#282b2f] rounded-lg h-full p-4  bg-[#1e2022]">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Nav />}
    </div>
  );
};
