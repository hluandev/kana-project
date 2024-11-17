"use client";

import { useState } from "react";
import { InputAnswer } from "./input-answer";

interface Props {
  data: any;
}

export const EnemyCard = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-0.5 items-center h-fit">
      <div className="bg-red-600  border w-72 border-red-500 rounded-md p-2 text-center font-bold text-xl italic">
        20
      </div>

      <div className="text-7xl border-2 border-black bg-black/70 backdrop-blur-2xl flex justify-center items-center h-72 aspect-square rounded-md">
        {data[currentIndex].japanese}
      </div>

      <InputAnswer
        currentIndex={currentIndex}
        data={data}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};
