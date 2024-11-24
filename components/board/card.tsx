import { useKanaStore } from "@/stores/useKanaStore";
import { useState } from "react";

interface CardProps {
  card: any;
}

export const Card = ({ card }: CardProps) => {
  const { selectedCard, addSelectedCard, removeSelectedCard } = useKanaStore();

  const isSelected = selectedCard.some(
    (selected) => selected.romaji === card.romaji
  );

  return (
    <div
      onClick={() => {
        if (isSelected) {
          removeSelectedCard(card);
        }
      }}
      className={`flex relative duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-600 hover:z-50 hover:-mt-5 w-40 h-56 p-2  ${
        isSelected ? "bg-blue-600 -mt-10" : "bg-[#1f1f1f]"
      }  darkBorder rounded-[10px]  shadow-inner-shadow-dark-float  cursor-pointer`}
    >
      <div className="flex justify-between  w-full">
        <p className="bg-black/30  border border-[#2e3032] h-8 w-8 rounded-lg flex items-center justify-center">
          {card?.suit}
        </p>

        <p className="font-mono absolute bottom-2.5 left-1/2 -translate-x-1/2 ">
          {card?.rank}
        </p>
      </div>
      <p className="absolute top-1/2 text-4xl -translate-x-1/2 left-1/2 -translate-y-1/2">
        {card?.japanese}
      </p>
    </div>
  );
};
