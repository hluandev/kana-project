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
    <div className="xl:w-80 w-60 z-10 relative rounded-xl h-full border border-black/15 shadow-sm bg-white backdrop-blur-lg p-3 overflow-hidden">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
