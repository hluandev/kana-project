"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";
import { motion } from "framer-motion";
import UpgradeCard from "./upgrade-card";

const handRankOrder = {
  high_card: 1,
  pair: 2,
  two_pairs: 3,
  three_of_a_kind: 4,
  straight: 5,
  flush: 6,
  full_house: 7,
  four_of_a_kind: 8,
  straight_flush: 9,
};

export const SpecialHands = () => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    currentSpecial,
    selectedSpecial,
    kanaMissions,
    hiragana,
    currentUpgrades,
  } = useKanaStore();
  const { turns, missionID, progress, reroll, multiplierBonus } =
    useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  console.log(currentUpgrades);

  return (
    <div>
      {currentUpgrades.length > 0 && (
        <div className="fixed right-4 top-4 space-y-2">
          <div className="grid gap-2">
            {Object.entries(
              currentUpgrades.reduce(
                (
                  acc: { [key: string]: { card: any; count: number } },
                  card
                ) => {
                  const key = card.romaji;
                  acc[key] = acc[key] || { card, count: 0 };
                  acc[key].count++;
                  return acc;
                },
                {}
              )
            )
              .sort(([, { card: cardA }], [, { card: cardB }]) => {
                const rankA =
                  handRankOrder[cardA.combo as keyof typeof handRankOrder] || 0;
                const rankB =
                  handRankOrder[cardB.combo as keyof typeof handRankOrder] || 0;
                return rankB - rankA;
              })
              .map(([key, { card, count }]) => (
                <UpgradeCard key={key} card={card} count={count} />
              ))}
          </div>
        </div>
      )}

      <motion.div
        layout
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
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
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
                      <span className="text-blue-600">
                        +{card.reward_points}
                      </span>{" "}
                      /
                      <span className="text-red-500">
                        +{card.reward_multiplier}
                      </span>{" "}
                    </span>
                  )}

                  {card.condition === "points" && (
                    <span className="text-blue-600">
                      +{card.reward} points{" "}
                    </span>
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

                  {card.condition === "bought" && (
                    <span className="text-red-500">
                      +{card.reward} multiplier ({multiplierBonus}){` `}
                    </span>
                  )}

                  {card.desc}
                </p>
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
