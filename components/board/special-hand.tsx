"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";
import UpgradeCard from "./upgrade-card";
import { SpecialCardCurrent } from "./special-card-current";

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
  const {
    currentSpecial,
    selectedSpecial,
    kanaMissions,
    hiragana,
    currentUpgrades,
    activeSpecials,
  } = useKanaStore();
  const { turns, missionID, progress, reroll, multiplierBonus, isEndlessMode } =
    useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  const hasWonGame =
    !isEndlessMode && missionID === 8 && progress >= mission?.target;

  return (
    <>
      {!hasWonGame && (
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
                      handRankOrder[
                        cardA.combo as keyof typeof handRankOrder
                      ] || 0;
                    const rankB =
                      handRankOrder[
                        cardB.combo as keyof typeof handRankOrder
                      ] || 0;
                    return rankB - rankA;
                  })
                  .map(([key, { card, count }]) => (
                    <UpgradeCard
                      isActive={activeSpecials.includes(card.romaji)}
                      key={key}
                      card={card}
                      count={count}
                    />
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
            } relative p-2 z-10 grid grid-cols-5 gap-2 rounded-xl bg-black/5 border border-black/15 shadow-inner`}
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
                <SpecialCardCurrent
                  key={card.romaji}
                  card={card}
                  index={index}
                  isSelected={isSelected}
                  hiragana={hiragana}
                  selectedSpecial={selectedSpecial}
                  currentSpecial={currentSpecial}
                  activeSpecials={activeSpecials}
                  turns={turns}
                  mission={mission}
                  progress={progress}
                  reroll={reroll}
                  multiplierBonus={multiplierBonus}
                />
              );
            })}
          </motion.div>
        </div>
      )}
    </>
  );
};
