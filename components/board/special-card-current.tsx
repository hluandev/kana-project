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
      className={`flex flex-col lg:p-3 p-1 ${
        activeSpecials.includes(card.romaji) &&
        "[background:linear-gradient(45deg,#fff,theme(colors.white)_50%,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.red.600/.48)_0%,theme(colors.red.500)_20%,theme(colors.indigo.300)_40%,theme(colors.indigo.500)_60%,theme(colors.slate.600/.48)_100%)_border-box] rounded-xl border-2 border-transparent animate-border"
      } relative justify-between border-2 rounded-xl h-32 w-20 lg:h-52 lg:w-36   ${
        isSelected
          ? "border-yellow-500 bg-[#efcb68]"
          : " bg-white border-black/10"
      }`}
    >
      {turns >= 0 && mission?.target <= progress && (
        <p
          className={`text-sm ${
            isSelected ? "bg-black/90 text-[#efcb68]" : "bg-[#efcb68]"
          } absolute left-1/2 -translate-x-1/2 lg:px-1.5 lg:py-0.5 px-1 max-lg:text-xs font-medium border border-black/10 -top-0 -translate-y-1/2 rounded-full`}
        >
          ¥300
        </p>
      )}

      {selectedSpecial.length > 0 &&
        currentSpecial.some((special) =>
          selectedSpecial.some((selected) => selected.romaji === special.romaji)
        ) && (
          <motion.div
            className="absolute lg:top-2 lg:left-2 top-0 left-0 text-xs lg:text-sm  bg-black/80 border border-black/10 shadow-sm text-white aspect-square lg:w-7 w-5 flex justify-center items-center rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {index + 5}
          </motion.div>
        )}

      <p className="lg:text-4xl text-xl font-medium flex justify-center items-center h-full relative group">
        {isHovered
          ? card.romaji
          : hiragana
          ? card.japanese
          : card.japanese_katakana}
      </p>

      <p
        className={`text-center lg:rounded-xl rounded-lg border border-black/10 text-sm shadow-sm relative lg:px-2 lg:h-60 px-1 h-60 flex justify-center items-center  ${
          isSelected ? "bg-black/80 text-white" : "bg-black/5"
        } backdrop-blur-lg`}
      >
        <p className="font-medium max-lg:text-xs">
          {card.condition === "xmultiples" && (
            <span className="text-red-500">x{card.reward} mul </span>
          )}

          {card.condition === "upgrade" && (
            <span>
              <span className="text-blue-600">+{card.reward_points}</span> /
              <span className="text-red-500">+{card.reward_multiplier}</span>{" "}
            </span>
          )}

          {card.condition === "points" && (
            <span className="text-blue-600">+{card.reward} pts </span>
          )}

          {card.condition === "multiples" && (
            <span className="text-red-500">+{card.reward} mul </span>
          )}

          {card.condition === "reroll" && (
            <span className="text-red-500">
              +{card.reward} mul ({reroll}){` `}
            </span>
          )}

          {card.condition === "bought" && (
            <span className="text-red-500">
              +{card.reward} mul ({multiplierBonus}){` `}
            </span>
          )}

          {card.desc}
        </p>
      </p>
    </motion.div>
  );
};
