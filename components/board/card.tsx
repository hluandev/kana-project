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
      className={`flex relative duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-600 hover:z-50 hover:-mt-5 w-40 h-56 p-2  ${
        isSelected ? "bg-orange-400 -mt-10" : "bg-white"
      }  border border-neutral-300 rounded-[10px]  shadow-inner-shadow-dark-float `}
    >
      {onHover && (
        <p className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white py-2 w-full text-center  rounded-[10px]  border border-neutral-300">
          {card.romaji}
        </p>
      )}

      <div className="flex justify-between w-full">
        <p
          className={`${card?.suit === "あ" && "text-red-500"} ${
            card?.suit === "う" && "text-blue-500"
          } ${card?.suit === "お" && "text-green-500"} ${
            card?.suit === "い" && "text-purple-500"
          } ${
            card?.suit === "え" && "text-black"
          } bg-[#f5f2f0] border border-neutral-300 h-8 w-8 rounded-lg flex items-center justify-center`}
        >
          {card?.suit}
        </p>

        <p className="font-mono absolute bottom-2.5 left-1/2 -translate-x-1/2 ">
          {card?.rank}
        </p>
      </div>
      <p className="absolute top-1/2 text-4xl -translate-x-1/2 left-1/2 -translate-y-1/2">
        {card?.japanese}
      </p>
    </motion.div>
  );
};
