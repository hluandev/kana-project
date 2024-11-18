"use client";

import { playSound } from "@/actions/functions/play-sound";
import { PlayMode } from "@/data/play-mode";
import Link from "next/link";

const Play = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
      <div className="flex gap-8 ">
        {PlayMode.map((item, index) => (
          <Link
            onClick={() => {
              playSound("/audio/onclick.wav");
            }}
            onMouseEnter={() => {
              playSound("/audio/click.wav");
            }}
            href={`/menu/play/${item.text.toLowerCase()}`}
            prefetch
            key={index}
            className="bg-pink-400/70 hover:bg-pink-600 relative text-center rounded-md border border-pink-500 flex-col px-10 gap-3  backdrop-blur-md h-[30rem] w-72 flex justify-center items-center text-4xl"
          >
            <p className="font-bold">{item.text}</p>
            <p className="text-lg font-medium">{item.desc}</p>

            <p className="text-base absolute bottom-4">{item.note}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Play;
