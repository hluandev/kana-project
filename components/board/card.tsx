import { useKanaStore } from "@/stores/useKanaStore";
import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  card: any;
}

export const Card = ({ card }: CardProps) => {
  const { selectedCard } = useKanaStore();
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
      className={`flex relative duration-300 shadow-sm border border-black/10 hover:scale-110 hover:shadow-lg hover:shadow-[#381d2a] hover:z-50 hover:-mt-5 w-40 h-56 p-2  ${
        isSelected ? "bg-[#381D2A] text-white -mt-10" : "bg-[#fbfaf9]"
      }  rounded-[10px]  `}
    >
      {onHover && (
        <p className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white py-2 w-full text-center  rounded-[10px]  border border-neutral-300">
          {card.romaji}
        </p>
      )}

      <div className="flex justify-between w-full">
        <p className="pl-1 text-2xl">{card?.rank}</p>

        <p
          className={`${card?.suit === "あ" && "bg-[#f3976e] text-white"} ${
            card?.suit === "う" && "bg-[#99b455] text-white"
          } ${card?.suit === "お" && "bg-[#e4e4e6] text-black"} ${
            card?.suit === "い" && "bg-[#EFCB68] text-black"
          } ${
            card?.suit === "え" && "bg-[#bf8af2] text-white"
          }    h-8 w-8 rounded-lg flex items-center justify-center`}
        >
          {card?.suit}
        </p>
      </div>
      <p className="absolute top-1/2 text-4xl -translate-x-1/2 left-1/2 -translate-y-1/2">
        {card?.japanese}
      </p>
    </motion.div>
  );
};
