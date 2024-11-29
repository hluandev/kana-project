"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const SpecialHands = () => {
  const { currentSpecial, selectedSpecial, kanaMissions } = useKanaStore();
  const { turns, missionID, progress } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <div
      className={`${
        turns === 0 && mission?.target > progress && "hidden"
      } h-64 w-full p-4 z-50 grid grid-cols-8 gap-2 rounded-2xl bg-white/50`}
    >
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

                {card.desc}
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
};
