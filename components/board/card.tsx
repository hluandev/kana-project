import { useKanaStore } from "@/stores/useKanaStore";
import { useState } from "react";

interface CardProps {
  card: any;
}

export const Card = ({ card }: CardProps) => {
  const [clicked, setClicked] = useState(false);
  const { selectedCard, addSelectedCard, removeSelectedCard } = useKanaStore();

  return (
    <div
      onClick={() => {
        if (!clicked && selectedCard.length < 5) {
          setClicked(true);
          addSelectedCard(card);
        } else if (clicked) {
          setClicked(false);
          removeSelectedCard(card);
        }

        console.log(selectedCard.length);
      }}
      className={`flex relative duration-300  w-40 h-56 p-2 border-[#2e3032] ${
        clicked ? "bg-blue-600 -mt-10" : "bg-[#1e2022]"
      }  border rounded-md`}
    >
      <div className="flex justify-between  w-full">
        <p className="bg-black/30  border border-[#2e3032] h-8 w-8 rounded-full flex items-center justify-center">
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
