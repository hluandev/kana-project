"use client";

import { usePathname } from "next/navigation";
import { GameInfo } from "./game-info/game-info";
import { Menu } from "./menu/menu";
import { useEffect } from "react";
import { insertNewDayActivity } from "@/actions/server/activity-server-actions";

export const LeftSide = () => {
  const pathname = usePathname();

  useEffect(() => {
    insertNewDayActivity();
  }, []);

  return (
    <div className="w-80 z-10 relative h-full bg-white/50 p-4 overflow-hidden">
      {pathname.split("/")[3] === "kana" ? <GameInfo /> : <Menu />}
    </div>
  );
};
