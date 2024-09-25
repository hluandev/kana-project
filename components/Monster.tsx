"use client";

import { failStore } from "@/store/failStore";
import { Shield } from "lucide-react";
import { useState } from "react";

interface Props {
  monsters: any;
}

export const Monster = ({ monsters }: Props) => {
  const { fail } = failStore();

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2">
      <p className="text-6xl font-medium text-center">{monsters.word}</p>

      <div className="relative">
        <img
          src={`/img/${monsters.meaning}.jpg`}
          className="h-96  rounded-3xl mt-10"
          alt=""
        />

        {fail && (
          <div className="text-6xl space-y-5 text-white py-4 text-center w-full rounded-2xl bg-red-600/50 backdrop-blur-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            {/* <Shield size={200} strokeWidth={0.5} className="" /> */}
            <div className="">
              <p>{monsters.read}</p>
              <p className="font-semibold">{monsters.meaning}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
