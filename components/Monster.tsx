"use client";

import { useState } from "react";

interface Props {
  monsters: any;
}

export const Monster = ({ monsters }: Props) => {
  const [wrong, setWrong] = useState(false);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2">
      <p className="text-6xl font-medium text-center">{monsters.word}</p>

      <div className="relative">
        <img src="/img/book.webp" className="h-96  rounded-3xl mt-10" alt="" />

        {wrong && (
          <div className="text-6xl space-y-5 text-white py-4 text-center w-full rounded-2xl bg-red-600/50 backdrop-blur-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <p>{monsters.read}</p>
            <p className="font-semibold">{monsters.meaning}</p>
          </div>
        )}
      </div>
    </div>
  );
};
