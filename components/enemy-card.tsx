"use client";

import { useState } from "react";

interface Props {
  data: any;
}

export const EnemyCard = ({ data }: Props) => {
  const [id, setId] = useState(0);
  const [cards, setCards] = useState(data);

  return (
    <div className="flex flex-col gap-0.5 items-center h-fit">
      <div className="bg-red-600  border w-72 border-red-500 rounded-md p-2 text-center font-bold text-xl italic">
        20
      </div>
      {cards.map(
        (item: any, index: number) =>
          index === id && (
            <div
              key={index}
              className="text-7xl  bg-black/70 backdrop-blur-2xl flex justify-center items-center h-72 aspect-square rounded-md"
            >
              {item.japanese}
            </div>
          )
      )}
    </div>
  );
};
