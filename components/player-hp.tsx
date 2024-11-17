"use client";

import { useState } from "react";

export const PlayerHp = () => {
  const [hp, setHp] = useState(100);

  return (
    <div className="absolute space-y-0.5 left-0 bottom-0 -skew-y-6 p-12">
      <div className="font-bold text-2xl">{hp}</div>

      <div className="flex gap-0.5  bg-black/50 p-0.5 rounded-md">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="w-10 aspect-square p-2 rounded-md font-bold text-2xl text-center italic bg-blue-500"
          ></div>
        ))}
      </div>

      <div className="text-2xl font-bold bg-black/50 py-1 px-2 rounded-md">
        Ruan
      </div>
    </div>
  );
};
