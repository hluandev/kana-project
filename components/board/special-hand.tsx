"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";
import { motion } from "framer-motion";
export const SpecialHands = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { currentSpecial, selectedSpecial, kanaMissions, hiragana } =
    useKanaStore();
  const { turns, missionID, progress, reroll } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <div
      className={`${
        turns === 0 && mission?.target > progress && "hidden"
      } h-[17rem] ${
        currentSpecial.length === 0 ? "aspect-square" : "w-fit"
      } relative p-4 z-10 grid grid-cols-5 gap-4 rounded-xl bg-black/5 border border-black/15 shadow-inner`}
    >
      {currentSpecial.length === 0 && (
        <p className="text-center absolute top-1/2 -translate-y-1/2 w-full text-black/40 ">
          No special cards
        </p>
      )}

      {currentSpecial.map((card, index: number) => {
        const isSelected = selectedSpecial.some(
          (selected) => selected.romaji === card.romaji
        );

        return (
          <div
            key={card.romaji}
            className={`flex flex-col p-3 relative overflow-hidden justify-between border border-black/20 shadow-sm rounded-xl  w-40 h-full   ${
              isSelected ? "border-yellow-500 bg-[#efcb68]" : " bg-white"
            }`}
          >
            {selectedSpecial.length > 0 &&
              currentSpecial.some((special) =>
                selectedSpecial.some(
                  (selected) => selected.romaji === special.romaji
                )
              ) && (
                <motion.div
                  className="absolute top-2 left-2  bg-black/90 text-white aspect-square w-8 flex justify-center items-center rounded-full  z-50  "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {index + 5}
                </motion.div>
              )}

            <p className="text-4xl font-medium flex justify-center items-center h-full relative group">
              {isHovered
                ? card.romaji
                : hiragana
                ? card.japanese
                : card.japanese_katakana}
            </p>

            <p
              className={`text-center rounded-xl border border-black/10 text-[0.9rem] shadow-sm relative px-4  h-60  flex justify-center items-center  ${
                isSelected ? "bg-black/80 text-white" : "bg-black/5"
              } backdrop-blur-lg`}
            >
              {turns >= 0 && mission?.target <= progress && (
                <p
                  className={`text-sm ${
                    isSelected ? "bg-black/90" : "bg-[#efcb68]"
                  } absolute px-2 py-1 font-medium border border-black/15 -top-0 -translate-y-1/2 rounded-full`}
                >
                  ¥300
                </p>
              )}

              <p className="font-medium">
                {card.condition === "xmultiples" && (
                  <span className="text-red-500">
                    x{card.reward} multiplier{" "}
                  </span>
                )}

                {card.condition === "upgrade" && (
                  <span>
                    <span className="text-blue-600">+{card.reward_points}</span>{" "}
                    /
                    <span className="text-red-500">
                      +{card.reward_multiplier}
                    </span>{" "}
                  </span>
                )}

                {card.condition === "points" && (
                  <span className="text-blue-600">+{card.reward} points </span>
                )}

                {card.condition === "multiples" && (
                  <span className="text-red-500">
                    +{card.reward} multiplier{" "}
                  </span>
                )}

                {card.condition === "reroll" && (
                  <span className="text-red-500">
                    +{card.reward} multiplier ({reroll}){` `}
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
