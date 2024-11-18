"use client";

import { LockIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  profiles: any;
}

export const KanaBoard = ({ profiles }: Props) => {
  const defaultLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [currentLevels, setCurrentLevels] = useState<number[]>([]);

  useEffect(() => {
    setCurrentLevels(defaultLevels.slice(0, profiles.kana));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 font-mono ">
      {defaultLevels.map((item, index) => (
        <Link
          href={`kana/${item.toString()}`}
          className={`${
            item === 5 || item === 10 ? "bg-red-800/80" : "bg-neutral-800/80"
          } hover:border-pink-600 border-2 border-neutral-800 relative cursor-pointer text-3xl rounded-md overflow-hidden backdrop-blur-xl font-bold w-60 flex justify-center items-center aspect-video`}
          key={index}
        >
          {item === profiles.kana && (
            <div className="text-xs absolute top-2 right-2 bg-orange-500/80 px-1.5 rounded-md">
              Current
            </div>
          )}
          <p>{item === 1 ? "あ" : <LockIcon strokeWidth={1.5} />}</p>
        </Link>
      ))}
    </div>
  );
};
