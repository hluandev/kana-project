"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Nav } from "./menu/components/nav";

export const LeftSide = () => {
  const pathname = usePathname();

  return (
    <div className="w-80 z-50 relative p-3 border border-black/10 h-full overflow-hidden  rounded-[14px] bg-white bg-opacity-50 backdrop-blur-xl ">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Nav />}
    </div>
  );
};
