"use client";

import { useKanaStore } from "@/stores/useKanaStore";

export const SpecialHands = () => {
  const { currentSpecial, selectedSpecial } = useKanaStore();

  return (
    <div className="h-60 p-3 border border-neutral-300 z-50 grid grid-cols-8 gap-3 rounded-[14px] bg-white">
      {currentSpecial.map((card) => {
        const isSelected = selectedSpecial.some(
          (selected) => selected.romaji === card.romaji
        );

        return (
          <div
            key={card.romaji}
            className={` border flex flex-col overflow-hidden justify-between rounded-xl w-40 h-full bg-[url('/img/ya.png')] bg-cover ${
              isSelected
                ? " border-yellow-500/80 shadow-yellow-500/50 shadow-lg"
                : "border-neutral-800"
            }`}
          >
            <p></p>

            <p className="text-center relative px-4 h-20  flex justify-center items-center border-t border-neutral-800 bg-black/50 backdrop-blur-lg">
              <p className="italic">{card.desc}</p>

              <p className="absolute -top-4 text-white bg-black px-2 py-0.5 rounded-md border border-neutral-800">
                {card.japanese}
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
};
