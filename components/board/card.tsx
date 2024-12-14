import { useKanaStore } from "@/stores/useKanaStore";
import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  card: any;
}

export const Card = ({ card }: CardProps) => {
  const { selectedCard, hiragana, showRomaji } = useKanaStore();
  const [onHover, setOnHover] = useState(false);

  const isSelected = selectedCard.some(
    (selected) => selected.romaji === card.romaji
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        skew: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        skew: 0,
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`flex border-2 relative duration-300  hover:scale-110 hover:shadow-lg hover:z-50 hover:-mt-5 h-24 w-16 p-1 lg:h-44 lg:w-[7.5rem] lg:p-1.5  ${
        isSelected
          ? "bg-blue-900/80 border-blue-400 text-white lg:-mt-3"
          : "bg-black/80 border-transparent backdrop-blur-xl"
      }  rounded-xl`}
    >
      {!showRomaji && onHover && (
        <p
          className={`absolute -top-12 left-1/2 -translate-x-1/2 ${
            isSelected ? "bg-[#1d1d1f] text-white" : "bg-white"
          }  py-2 w-full text-center  rounded-[10px]  border border-neutral-300`}
        >
          {card.romaji}
        </p>
      )}

      <div className="flex justify-between w-full">
        <p className="pl-1 lg:text-lg">{card?.rank}</p>

        <p
          className={`${card?.suit === "あ" && "bg-[#ff915a] text-black"} ${
            card?.suit === "う" && "bg-[#01de5b] text-black"
          } ${card?.suit === "お" && "bg-[#e4e4e6] text-black"} ${
            card?.suit === "い" && "bg-[#ffe65e] text-black"
          } ${
            card?.suit === "え" && "bg-[#fc96df] text-black"
          }   lg:h-7 lg:w-7 h-5 w-5 rounded-md flex items-center justify-center`}
        >
          {hiragana ? card?.suit : card?.suit_katakana}
        </p>
      </div>
      <p className="absolute top-1/2 font-medium lg:text-4xl text-2xl -translate-x-1/2 left-1/2 -translate-y-1/2">
        {hiragana ? card?.japanese : card?.japanese_katakana}
      </p>

      {showRomaji && (
        <p className="absolute lg:bottom-3 bottom-1 text-xs text-center left-1/2 -translate-x-1/2">
          {card?.romaji}
        </p>
      )}
    </motion.div>
  );
};
