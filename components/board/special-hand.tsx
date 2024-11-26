"use client";

import { useKanaStore } from "@/stores/useKanaStore";

export const SpecialHands = () => {
  const { currentSpecial, selectedSpecial } = useKanaStore();

  return (
    <div className="h-60 p-3 text-neutral-500 z-50 grid grid-cols-8 gap-3 rounded-[14px] bg-[#fbfaf9] shadow-sm border border-black/10">
      {currentSpecial.map((card) => {
        const isSelected = selectedSpecial.some(
          (selected) => selected.romaji === card.romaji
        );

        return (
          <div
            key={card.romaji}
            className={`flex flex-col overflow-hidden justify-between rounded-xl bg-white border border-black/10 w-40 h-full  bg-cover ${
              isSelected
                ? " border-yellow-500/80 shadow-yellow-500/50 shadow-lg"
                : "border-neutral-300"
            }`}
          >
            <p className="text-3xl flex justify-center items-center h-full">
              {card.desc.slice(0, 3)}
            </p>

            <p className="text-center relative px-4 h-36  flex justify-center items-center border-t border-neutral-300 bg-white/50 backdrop-blur-lg">
              <p className="italic text-sm">{card.desc}</p>

              <p className="absolute -top-4 text-white bg-black px-2 py-0.5 rounded-md border border-neutral-300">
                {card.japanese}
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
};
