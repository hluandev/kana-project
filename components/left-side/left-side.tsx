"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";

export const LeftSide = () => {
  const pathname = usePathname();

  // useEffect(() => {
  //   insertNewDayActivity();
  // }, []);

  return (
    <div className=" w-64 z-10 relative rounded-xl h-full border border-black/10 shadow-sm bg-white backdrop-blur-lg p-2 overflow-hidden">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
