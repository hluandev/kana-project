"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const SpecialHands = () => {
  const { currentSpecial, selectedSpecial, kanaMissions, hiragana } =
    useKanaStore();
  const { turns, missionID, progress, reroll } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <div
      className={`${
        turns === 0 && mission?.target > progress && "hidden"
      } h-64 ${
        currentSpecial.length === 0 ? "aspect-square" : "w-fit"
      } relative p-4 z-50 grid grid-cols-5 gap-2 rounded-2xl bg-white/50`}
    >
      {currentSpecial.length === 0 && (
        <p className="text-center absolute top-1/2 -translate-y-1/2 text-2xl font-medium w-full text-black/40 ">
          No special cards
        </p>
      )}

      {currentSpecial.map((card) => {
        const isSelected = selectedSpecial.some(
          (selected) => selected.romaji === card.romaji
        );

        return (
          <div
            key={card.romaji}
            className={`flex flex-col p-2 overflow-hidden justify-between rounded-xl  w-40 h-full   ${
              isSelected ? "border-yellow-500 bg-[#efcb68]" : " bg-white"
            }`}
          >
            <p className="text-5xl font-medium flex justify-center items-center h-full">
              {hiragana ? card.japanese : card.japanese_katakana}
            </p>

            <p
              className={`text-center rounded-xl relative px-4  h-52  flex justify-center items-center  ${
                isSelected ? "bg-black/80 text-white" : "bg-[#f2f3f7]"
              } backdrop-blur-lg`}
            >
              <p className="font-medium">
                {card.condition === "xmultiples" && (
                  <span className="text-purple-600">
                    x{card.reward} multiples{" "}
                  </span>
                )}

                {card.condition === "upgrade" && (
                  <span>
                    <span className="text-[#01de5b]">
                      +{card.reward_points}
                    </span>{" "}
                    /
                    <span className="text-purple-600">
                      +{card.reward_multiplier}
                    </span>{" "}
                  </span>
                )}

                {card.condition === "points" && (
                  <span className="text-[#01de5b]">+{card.reward} points </span>
                )}

                {card.condition === "multiples" && (
                  <span className="text-purple-600">
                    +{card.reward} multiples{" "}
                  </span>
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
      })}
    </div>
  );
};
