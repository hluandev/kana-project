import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";

interface SpecialCardProps {
  japanese: string;
  japanese_katakana: string;
  desc: string;
  romaji: string;
  price: number;
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
  const { reroll } = useScoreStore();

  const isSelected = selectedSpecial.some((card) => card.romaji === romaji);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex relative p-4 overflow-hidden duration-300 flex-col ${
        isSelected
          ? "border-yellow-500 bg-[#efcb68]"
          : isFrozen
          ? "border-blue-500 bg-blue-200"
          : "bg-white"
      } rounded-xl`}
    >
      <div className="flex-1">
        <p className="font-medium text-5xl flex justify-center items-center h-full">
          {hover ? romaji : hiragana ? japanese : japanese_katakana}
        </p>
      </div>

      <p
        className={`text-center px-4 flex items-center font-medium justify-center relative ${
          isSelected ? "bg-black/80 text-white" : "bg-[#f2f3f7]"
        } rounded-lg h-32`}
      >
        <p
          className={`absolute ${
            isSelected ? "bg-black/90 text-[#efcb68]" : "bg-[#efcb68]"
          } left-1/2 -translate-x-1/2 -top-3.5 text-sm rounded-full z-50 justify-center items-center px-2 py-1 font-medium flex `}
        >
          ¥{price}
        </p>

        <p className="font-medium">
          {card.condition === "xmultiples" && (
            <span className="text-purple-600">x{card.reward} multiples </span>
          )}

          {card.condition === "upgrade" && (
            <span>
              <span className="text-[#01de5b]">+{card.reward_points}</span> /
              <span className="text-purple-600">+{card.reward_multiplier}</span>{" "}
            </span>
          )}

          {card.condition === "points" && (
            <span className="text-[#01de5b]">+{card.reward} points </span>
          )}

          {card.condition === "multiples" && (
            <span className="text-purple-600">+{card.reward} multiples </span>
          )}

          {card.condition === "reroll" && (
            <span className="text-purple-600">
              +{card.reward} multiples ({reroll}){` `}
            </span>
          )}

          {card.desc}
        </p>
      </p>
    </div>
  );
}
