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
    <div
      className={`lg:w-64 z-10 ${
        pathname.split("/")[3] === "kana" && "max-lg:hidden"
      } relative rounded-xl h-full border border-black/10 shadow-sm bg-white backdrop-blur-lg lg:p-2 p-1 overflow-hidden`}
    >
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
