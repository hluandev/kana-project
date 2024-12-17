import { playSound } from "@/actions/client/play-sound";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useKanaStore } from "@/stores/useKanaStore";
import { motion } from "framer-motion";
import { ArrowLeftRightIcon } from "lucide-react";
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

  const isMobile = useIsMobile();
  const { setCurrentSpecial, setSelectedSpecial } = useKanaStore();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      layout
      key={card.romaji}
      className={`flex flex-col lg:p-2 p-1 ${
        activeSpecials.includes(card.romaji) &&
        "[background:linear-gradient(45deg,#000,theme(colors.black)_50%,#000)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.red.600/.48)_0%,theme(colors.red.500)_20%,theme(colors.indigo.300)_40%,theme(colors.indigo.500)_60%,theme(colors.slate.600/.48)_100%)_border-box] rounded-xl border-2 border-transparent animate-border"
      } relative justify-between border-2 border-transparent rounded-xl h-32 w-[4.8rem] lg:h-48 lg:w-[8rem]   ${
        isSelected
          ? "border-yellow-500 bg-[#efcb68]"
          : " bg-black/80  backdrop-blur-xl"
      }`}
    >
      {turns >= 0 && mission?.target <= progress && (
        <p
          className={` ${
            isSelected
              ? "bg-black/80 text-[#efcb68]"
              : "bg-[#efcb68] text-black"
          } absolute left-1/2 -translate-x-1/2 lg:px-2 lg:py-0.5 px-1 max-lg:text-xs font-medium -top-0 -translate-y-1/2 rounded-full`}
        >
          300
        </p>
      )}

      {selectedSpecial.length > 0 &&
        currentSpecial.some((special) =>
          selectedSpecial.some((selected) => selected.romaji === special.romaji)
        ) && (
          <motion.div
            onClick={() => {
              // Find current index of selected card
              const selectedCardIndex = currentSpecial.findIndex(
                (card) => card.romaji === selectedSpecial[0].romaji
              );

              // Calculate target position (index + 5 represents the displayed number)
              const targetIndex = index;

              if (
                selectedCardIndex !== -1 &&
                selectedCardIndex !== targetIndex
              ) {
                // Play sound effect
                playSound("SELECT");

                // Reorder the cards
                const newSpecialCards = [...currentSpecial];
                const [movedItem] = newSpecialCards.splice(
                  selectedCardIndex,
                  1
                );
                newSpecialCards.splice(targetIndex, 0, movedItem);

                // Update state
                setCurrentSpecial(newSpecialCards);
                setSelectedSpecial([]);
              }
            }}
            className={`absolute lg:top-1 lg:left-1 z-50 max-lg:-bottom-9 max-lg:left-1/2 max-lg:-translate-x-1/2  bg-black/80 aspect-square lg:w-7 w-6 flex justify-center items-center rounded-lg cursor-pointer hover:bg-black`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isMobile ? <ArrowLeftRightIcon className="h-4 w-4" /> : index + 5}
          </motion.div>
        )}

      <p
        className={`lg:text-4xl ${
          isSelected && "text-black"
        } text-xl font-medium flex justify-center items-center h-full relative group`}
      >
        {isHovered
          ? card.romaji
          : hiragana
          ? card.japanese
          : card.japanese_katakana}
      </p>

      <p
        className={`text-center lg:rounded-xl rounded-lg relative border border-white/10 lg:px-2 lg:h-60 px-1 h-60 flex justify-center items-center  ${
          isSelected ? "bg-black/80 text-white" : "bg-white/10"
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
