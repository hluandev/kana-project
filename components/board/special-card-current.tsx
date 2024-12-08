import { motion } from "framer-motion";
import { useState } from "react";

interface SpecialCardCurrentProps {
  card: any;
  index: number;
  isSelected: boolean;
  hiragana: boolean;
  selectedSpecial: any[];
  currentSpecial: any[];
  activeSpecials: string[];
  turns: number;
  mission: any;
  progress: number;
  reroll: number;
  multiplierBonus: number;
}

export const SpecialCardCurrent = ({
  card,
  index,
  isSelected,
  hiragana,
  selectedSpecial,
  currentSpecial,
  activeSpecials,
  turns,
  mission,
  progress,
  reroll,
  multiplierBonus,
}: SpecialCardCurrentProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      layout
      key={card.romaji}
      className={`flex flex-col p-3 ${
        activeSpecials.includes(card.romaji) &&
        "[background:linear-gradient(45deg,#fff,theme(colors.white)_50%,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.red.600/.48)_0%,theme(colors.red.500)_20%,theme(colors.indigo.300)_40%,theme(colors.indigo.500)_60%,theme(colors.slate.600/.48)_100%)_border-box] rounded-2xl border-2 border-transparent animate-border"
      } relative overflow-hidden  justify-between border-2 rounded-xl  w-36 h-full   ${
        isSelected
          ? "border-yellow-500 bg-[#efcb68]"
          : " bg-white border-black/15"
      }`}
    >
      {selectedSpecial.length > 0 &&
        currentSpecial.some((special) =>
          selectedSpecial.some((selected) => selected.romaji === special.romaji)
        ) && (
          <motion.div
            className="absolute top-2 left-2  bg-black/80 border border-black/15 shadow-sm text-white aspect-square w-7 flex justify-center items-center rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {index + 5}
          </motion.div>
        )}

      <p className="text-4xl font-medium flex justify-center items-center h-full relative group">
        {isHovered
          ? card.romaji
          : hiragana
          ? card.japanese
          : card.japanese_katakana}
      </p>

      <p
        className={`text-center rounded-xl border border-black/10 text-sm shadow-sm relative px-2 h-60  flex justify-center items-center  ${
          isSelected ? "bg-black/80 text-white" : "bg-black/5"
        } backdrop-blur-lg`}
      >
        {turns >= 0 && mission?.target <= progress && (
          <p
            className={`text-sm ${
              isSelected ? "bg-black/90" : "bg-[#efcb68]"
            } absolute px-2 py-1 font-medium border border-black/15 -top-0 -translate-y-1/2 rounded-full`}
          >
            ¥300
          </p>
        )}

        <p className="font-medium">
          {card.condition === "xmultiples" && (
            <span className="text-red-500">x{card.reward} multiplier </span>
          )}

          {card.condition === "upgrade" && (
            <span>
              <span className="text-blue-600">+{card.reward_points}</span> /
              <span className="text-red-500">+{card.reward_multiplier}</span>{" "}
            </span>
          )}

          {card.condition === "points" && (
            <span className="text-blue-600">+{card.reward} points </span>
          )}

          {card.condition === "multiples" && (
            <span className="text-red-500">+{card.reward} multiplier </span>
          )}

          {card.condition === "reroll" && (
            <span className="text-red-500">
              +{card.reward} multiplier ({reroll}){` `}
            </span>
          )}

          {card.condition === "bought" && (
            <span className="text-red-500">
              +{card.reward} multiplier ({multiplierBonus}){` `}
            </span>
          )}

          {card.desc}
        </p>
      </p>
    </motion.div>
  );
};
