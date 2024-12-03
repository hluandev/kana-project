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
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`flex relative duration-300 border border-black/15 shadow-sm hover:scale-110 hover:shadow-lg hover:shadow-[#381d2a] hover:z-50 hover:-mt-5 w-36 h-52 p-2  ${
        isSelected ? "bg-[#1d1d1f] text-white -mt-10" : "bg-white"
      }  rounded-xl  `}
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
        <p className="pl-1 text-lg">{card?.rank}</p>

        <p
          className={`${card?.suit === "あ" && "bg-[#ff915a] text-black"} ${
            card?.suit === "う" && "bg-[#01de5b] text-black"
          } ${card?.suit === "お" && "bg-[#e4e4e6] text-black"} ${
            card?.suit === "い" && "bg-[#ffe65e] text-black"
          } ${
            card?.suit === "え" && "bg-[#fc96df] text-black"
          }    h-7 w-7 rounded-md flex items-center justify-center`}
        >
          {hiragana ? card?.suit : card?.suit_katakana}
        </p>
      </div>
      <p className="absolute top-1/2 font-medium text-4xl -translate-x-1/2 left-1/2 -translate-y-1/2">
        {hiragana ? card?.japanese : card?.japanese_katakana}
      </p>

      {showRomaji && (
        <p className="absolute bottom-3 text-[0.9rem] text-center left-1/2 -translate-x-1/2">
          {card?.romaji}
        </p>
      )}
    </motion.div>
  );
};
