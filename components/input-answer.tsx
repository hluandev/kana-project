"use client";

import { usePlayerHpStore } from "@/store/usePlayerHpStore";
import { useWrongStore } from "@/store/useWrongAnswer";
import { useState } from "react";

interface Props {
  currentIndex: number;
  setCurrentIndex: (e: number) => void;
  data: any;
}

export const InputAnswer = ({ data, currentIndex, setCurrentIndex }: Props) => {
  const [input, setInput] = useState("");
  const { hp, setHp } = usePlayerHpStore();
  const { wrong, setWrong } = useWrongStore();

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <>
      {wrong ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex + 1);
            setInput("");
            setWrong(false);
          }}
          className="absolute bottom-32 shadow-xl"
        >
          <input
            value={"Wrong answer (Enter)"}
            className="bg-red-600 backdrop-blur-lg font-bold border border-red-400 placeholder:text-white/30 text-center text-2xl py-3 px-3.5 outline-none rounded-lg w-96"
            type="text"
          />
          <input className="hidden" type="submit" />
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (data[currentIndex].romaji === input) {
              playSound("/audio/shoot.wav");
              setCurrentIndex(currentIndex + 1);
              setInput("");
            } else {
              playSound("/audio/fail.wav");
              if (hp >= 20) {
                setHp(hp - 20);
              }
              setInput("");
              setWrong(true);
            }
          }}
          className="absolute bottom-32 shadow-xl"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Answer here"
            className="bg-white/20 backdrop-blur-lg border border-neutral-500 placeholder:text-white/30 text-center text-2xl py-3 px-3.5 outline-none rounded-lg w-96"
            type="text"
          />
          <input className="hidden" type="submit" />
        </form>
      )}
    </>
  );
};
