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
      className={`flex border lg:h-52 lg:w-36 h-32 w-20 border-black/20  relative lg:p-3 p-1 transition-colors duration-300 flex-col ${
        isSelected
          ? "border-yellow-500 bg-[#efcb68]"
          : isFrozen
          ? "border-blue-500 bg-blue-200"
          : card.condition === "upgrade"
          ? "bg-orange-950/60 backdrop-blur-xl"
          : "bg-black/70 backdrop-blur-xl"
      } rounded-xl`}
    >
      <p
        className={`absolute ${
          isSelected ? "bg-black/90 text-[#efcb68]" : "bg-[#efcb68] text-black"
        } left-1/2 -translate-x-1/2 lg:-top-3 -top-2   max-lg:text-xs rounded-full justify-center items-center lg:px-2 px-1 lg:py-0.5  font-medium flex `}
      >
        {price}
      </p>

      <div className="flex-1">
        <p
          className={`font-medium ${
            isSelected && "text-black"
          } lg:text-4xl text-xl flex justify-center items-center h-full`}
        >
          {hover ? romaji : hiragana ? japanese : japanese_katakana}
        </p>
      </div>

      <div
        className={`text-center lg:px-2 px-1 flex   items-center font-medium justify-center relative ${
          isSelected
            ? "bg-black/80 text-white"
            : "bg-white/10 border border-white/15"
        } rounded-lg  lg:h-24 h-20`}
      >
        <div className="font-medium xl: text-xs">
          {card.condition === "xmultiples" && (
            <span className="text-red-500">x{card.reward} mul </span>
          )}

          {card.condition === "upgrade" && (
            <span>
              <span className="text-green-500">+{card.reward_points}</span> /
              <span className="text-red-500">+{card.reward_multiplier}</span>{" "}
            </span>
          )}

          {card.condition === "points" && (
            <span className="text-green-500">+{card.reward} pts </span>
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
        </div>
      </div>
    </div>
  );
}
