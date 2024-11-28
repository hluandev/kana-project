"use client";

import { useKanaStore } from "@/stores/useKanaStore";

export const SpecialHands = () => {
  const { currentSpecial, selectedSpecial } = useKanaStore();

  return (
    <div className="h-64 p-4 z-50 grid grid-cols-8 gap-2 rounded-[14px] bg-white/50">
      {currentSpecial.map((card) => {
        const isSelected = selectedSpecial.some(
          (selected) => selected.romaji === card.romaji
        );

        return (
          <div
            key={card.romaji}
            className={`flex flex-col p-2 overflow-hidden justify-between rounded-xl bg-white w-40 h-full  bg-cover ${
              isSelected
                ? "border-yellow-500/80 shadow-yellow-500/50 shadow-lg"
                : "border-neutral-300"
            }`}
          >
            <p className="text-5xl font-medium flex justify-center items-center h-full">
              {card.japanese}
            </p>

            <p className="text-center rounded-xl relative px-4  h-52  flex justify-center items-center  bg-[#f2f3f7] backdrop-blur-lg">
              <p className="font-medium">{card.desc}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
};
