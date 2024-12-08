import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";

interface SpecialCardProps {
  japanese: string;
  japanese_katakana: string;
  desc: string;
  romaji: string;
  price?: number;
  card: any;
  isFrozen?: boolean;
}

export default function SpecialCard({
  japanese,
  romaji,
  japanese_katakana,
  price,
  card,
  isFrozen = false,
}: SpecialCardProps) {
  const { selectedSpecial, hiragana } = useKanaStore();
  const [hover, setHover] = useState(false);
  const { reroll, multiplierBonus } = useScoreStore();

  const isSelected = selectedSpecial.some((card) => card.romaji === romaji);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex border border-black/20 shadow-sm relative p-3 overflow-hidden transition-colors duration-300 flex-col ${
        isSelected
          ? "border-yellow-500 bg-[#efcb68]"
          : isFrozen
          ? "border-blue-500 bg-blue-200"
          : card.condition === "upgrade"
          ? "bg-purple-100"
          : "bg-white"
      } rounded-xl`}
    >
      <div className="flex-1">
        <p className="font-medium text-4xl flex justify-center items-center h-full">
          {hover ? romaji : hiragana ? japanese : japanese_katakana}
        </p>
      </div>

      <div
        className={`text-center xl:px-4 px-2 flex border border-black/10 shadow-sm items-center font-medium justify-center relative ${
          isSelected ? "bg-black/80 text-white" : "bg-black/5"
        } rounded-lg xl:h-32 h-24`}
      >
        <p
          className={`absolute ${
            isSelected ? "bg-black/90 text-[#efcb68]" : "bg-[#efcb68]"
          } left-1/2 -translate-x-1/2 -top-3.5 border border-black/15 text-sm rounded-full z-50 justify-center items-center px-2 py-1 font-medium flex `}
        >
          ¥{price}
        </p>

        <div className="font-medium xl:text-sm text-xs">
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
        </div>
      </div>
    </div>
  );
}
