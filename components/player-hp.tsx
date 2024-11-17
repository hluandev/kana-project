"use client";

import { usePlayerHpStore } from "@/store/usePlayerHpStore";
import { useEffect, useState } from "react";

export const PlayerHp = () => {
  const { hp } = usePlayerHpStore();
  const [hpBars, setHpBars] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    if (hp === 80) {
      setHpBars([1, 2, 3, 4, 0]);
    }
    if (hp === 60) {
      setHpBars([1, 2, 3, 0, 0]);
    }
    if (hp === 40) {
      setHpBars([1, 2, 0, 0, 0]);
    }
    if (hp === 20) {
      setHpBars([1, 0, 0, 0, 0]);
    }
    if (hp === 0) {
      setHpBars([0, 0, 0, 0, 0]);
    }
  }, [hp]);

  return (
    <div className="absolute space-y-0.5 left-0 bottom-0 -skew-y-6 p-12">
      <div className="font-bold text-2xl">{hp}</div>

      <div className="flex gap-0.5  bg-black/50 p-0.5 rounded-md">
        {hpBars.map((item, index) => (
          <div
            key={index}
            className={`w-10 aspect-square p-2 rounded-md font-bold text-2xl text-center italic ${
              item === 0 ? "bg-neutral-600" : "bg-blue-500"
            } `}
          ></div>
        ))}
      </div>

      <div className="text-2xl font-bold bg-black/50 py-1 px-2 rounded-md">
        Ruan
      </div>
    </div>
  );
};
