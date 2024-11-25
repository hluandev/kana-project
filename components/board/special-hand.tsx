"use client";

import { useKanaStore } from "@/stores/useKanaStore";

export const SpecialHands = () => {
  const { currentSpecial } = useKanaStore();

  return (
    <div className="h-60 p-3  text-neutral-500  grid grid-cols-8 gap-3 darkBorder rounded-[14px] bg-[#1a1a1a] shadow-inner-shadow-dark-float">
      {currentSpecial.map((card) => (
        <div className="bg-black/50 flex flex-col overflow-hidden justify-between rounded-xl w-40 h-full bg-[url('/img/ya.png')] bg-cover">
          <p></p>

          <p className="text-center relative px-4 h-20  flex justify-center items-center border-t border-neutral-800 bg-black/50 backdrop-blur-lg">
            <p className="italic">{card.desc}</p>

            <p className="absolute -top-4 text-white bg-black px-2 py-0.5 rounded-md border border-neutral-800">
              {card.japanese}
            </p>
          </p>
        </div>
      ))}
    </div>
  );
};
