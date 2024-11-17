"use client";

import { useState } from "react";
import { InputAnswer } from "./input-answer";
import { useWrongStore } from "@/store/useWrongAnswer";
import { usePlayerHpStore } from "@/store/usePlayerHpStore";
import { useRouter } from "next/navigation";

interface Props {
  data: any;
}

export const EnemyCard = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { wrong, setWrong } = useWrongStore();
  const [correctAnswers, setCorrectAnswers] = useState<any>([]);
  const [input, setInput] = useState("");
  const rounter = useRouter();
  const [win, setWin] = useState(false);
  const { hp, setHp } = usePlayerHpStore();

  return (
    <div className="">
      {hp === 0 && (
        <div className="fixed flex flex-col gap-8 font-bold justify-center z-20 items-center top-0 left-0 w-full bg-black/80 h-full">
          <p className="text-9xl italic  text-red-600">You Died</p>
          <div className="space-x-6">
            <button
              onClick={() => rounter.back()}
              className="bg-red-600 leading-none text-3xl rounded-md text-white px-6 py-3"
            >
              Leave
            </button>

            <button
              onClick={() => {
                setHp(100);
                setCorrectAnswers([]);
                setInput("");
                setWrong(false);
                setCurrentIndex(0);
              }}
              className="bg-pink-600 leading-none text-3xl rounded-md text-white px-6 py-3"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      {win && (
        <div className="fixed flex flex-col gap-8 font-bold justify-center z-20 items-center top-0 left-0 w-full bg-black/80 h-full">
          <p className="text-9xl italic  text-yellow-500">Clear!</p>
          <button className="bg-pink-600 text-3xl rounded-md text-white px-6 py-2">
            Next Level
          </button>
        </div>
      )}

      {(!win || hp > 0) && (
        <div className="flex flex-col gap-0.5 items-center">
          <div className="bg-red-600  border w-72 border-red-500 rounded-md p-2 text-center font-bold text-xl italic">
            20
          </div>

          <div
            className={`${
              wrong ? "bg-red-600/50" : "bg-black/70"
            } text-7xl relative border-2 border-black  backdrop-blur-2xl flex justify-center items-center h-72 aspect-square rounded-md`}
          >
            <p>{data[currentIndex].japanese}</p>
            {wrong && (
              <p className="absolute bottom-5 text-5xl">
                {data[currentIndex].romaji}
              </p>
            )}
          </div>

          <InputAnswer
            input={input}
            setInput={setInput}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            setWin={setWin}
            currentIndex={currentIndex}
            data={data}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      )}
    </div>
  );
};
