import { useKanaStore } from "@/stores/useKanaStore";
import { useState } from "react";

interface SpecialCardProps {
  japanese: string;
  desc: string;
  romaji: string;
  price: number;
  card: any;
}

export default function SpecialCard({
  japanese,
  desc,
  romaji,
  price,
  card,
}: SpecialCardProps) {
  const { selectedSpecial } = useKanaStore();
  const [hover, setHover] = useState(false);

  const isSelected = selectedSpecial.some((card) => card.romaji === romaji);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex relative p-4 overflow-hidden duration-300 flex-col ${
        isSelected ? "border-yellow-500 bg-[#efcb68] " : "bg-white"
      } rounded-xl`}
    >
      <div className="flex-1">
        <p
          className={`absolute ${
            isSelected ? "bg-black/80 text-[#efcb68]" : "bg-[#efcb68]"
          } left-4 top-4 text-sm rounded-full z-50 justify-center items-center px-2 py-1 font-medium flex `}
        >
          ¥{price}
        </p>
        <p className="font-medium text-5xl flex justify-center items-center h-full">
          {hover ? romaji : japanese}
        </p>
      </div>

      <p
        className={`text-center px-4 flex items-center font-medium justify-center relative ${
          isSelected ? "bg-black/80 text-white" : "bg-[#f2f3f7]"
        } rounded-lg h-32`}
      >
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

          {card.desc}
        </p>
      </p>
    </div>
  );
}
