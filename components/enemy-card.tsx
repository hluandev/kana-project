"use client";

import { useState } from "react";
import { InputAnswer } from "./input-answer";
import { useWrongStore } from "@/store/useWrongAnswer";

interface Props {
  data: any;
}

export const EnemyCard = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { wrong } = useWrongStore();

  return (
    <div className="flex flex-col gap-0.5 items-center h-fit">
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
        currentIndex={currentIndex}
        data={data}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};
