"use client";

import { usePlayerHpStore } from "@/store/usePlayerHpStore";
import { useWrongStore } from "@/store/useWrongAnswer";
import { useEffect, useState } from "react";

interface Props {
  currentIndex: number;
  setCurrentIndex: (e: number) => void;
  setWin: (e: boolean) => void;
  data: any;
}

export const InputAnswer = ({
  data,
  currentIndex,
  setCurrentIndex,
  setWin,
}: Props) => {
  const defaultIndex = [0, 1, 2, 3, 4];
  const [input, setInput] = useState("");
  const { hp, setHp } = usePlayerHpStore();
  const { wrong, setWrong } = useWrongStore();
  const [correctAnswers, setCorrectAnswers] = useState<any>([]);
  const [randomNumber, setRandomNumber] = useState<any>(null);

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.volume = 0.2;
    audio.play();
  };

  const handleCurrentIndex = () => {
    const result = defaultIndex.filter(
      (num) => ![...correctAnswers, currentIndex].includes(num)
    );
    if (result.length > 0) {
      const newRandomNumber = result[Math.floor(Math.random() * result.length)];
      setCurrentIndex(newRandomNumber);
    }

    setInput("");
  };

  useEffect(() => {
    // Recalculate `randomNumber` whenever `correctAnswers` changes
    const result = defaultIndex.filter((num) => !correctAnswers.includes(num));
    if (result.length > 0) {
      setRandomNumber(result[Math.floor(Math.random() * result.length)]);
    } else {
      setWin(true);
    }

    console.log(result);
  }, [correctAnswers]);

  return (
    <>
      {wrong ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCurrentIndex();
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
            if (correctAnswers.length <= 4) {
              if (data[currentIndex].romaji === input) {
                playSound("/audio/shoot.wav");
                setCorrectAnswers((prev: any) => [...prev, currentIndex]);
                handleCurrentIndex();
              } else {
                playSound("/audio/fail.wav");
                if (hp >= 20) {
                  setHp(hp - 20);
                }
                setInput("");
                setWrong(true);
              }
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
