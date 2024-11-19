"use client";

import { playSound } from "@/actions/functions/play-sound";
import { useComboStore } from "@/store/useComboStore";
import { usePlayerHpStore } from "@/store/usePlayerHpStore";
import { useWrongStore } from "@/store/useWrongAnswer";
import { LockIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  profiles: any;
}

export const KanaBoard = ({ profiles }: Props) => {
  const defaultLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const { setHp } = usePlayerHpStore();
  const { setCombo } = useComboStore();
  const { setWrong } = useWrongStore();

  const [currentLevels, setCurrentLevels] = useState<number[]>([]);

  useEffect(() => {
    setCurrentLevels(defaultLevels.slice(0, profiles.kana));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 font-mono ">
      {defaultLevels.map((item, index) => (
        <Link
          onMouseEnter={() => {
            playSound({ src: "/audio/click.wav" });
          }}
          href={`kana/${item.toString()}`}
          onClick={() => {
            playSound({ src: "/audio/chooselevel.wav" });
            setHp(100);
            setCombo([]);
            setWrong(false);
          }}
          className={`${
            item === 6 || item === 12 ? "bg-red-800/80" : "bg-neutral-800/80"
          } hover:border-pink-600 border-2 border-neutral-800 relative cursor-pointer text-3xl rounded-md overflow-hidden backdrop-blur-xl font-bold w-60 flex justify-center items-center aspect-video`}
          key={index}
        >
          {item === profiles.kana && (
            <div className="text-xs absolute top-2 right-2 bg-orange-500/80 px-1.5 rounded-md">
              Current
            </div>
          )}
          <p>
            {currentLevels.includes(item) ? (
              item
            ) : (
              <LockIcon strokeWidth={1.5} />
            )}
          </p>
        </Link>
      ))}
    </div>
  );
};
