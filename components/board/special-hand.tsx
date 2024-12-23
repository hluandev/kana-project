"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";
import UpgradeCard from "./upgrade-card";
import { SpecialCardCurrent } from "./special-card-current";
import { useIsMobile } from "@/hooks/useIsMobile";
import { createPortal } from "react-dom";

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
  const isMobile = useIsMobile();
  const {
    currentSpecial,
    selectedSpecial,
    kanaMissions,
    hiragana,
    currentUpgrades,
    activeSpecials,
    showUpgrades,
  } = useKanaStore();
  const { turns, missionID, progress, reroll, multiplierBonus, isEndlessMode } =
    useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  const hasWonGame =
    !isEndlessMode && missionID === 8 && progress >= mission?.target;

  return (
    <>
      {!hasWonGame && (
        <div className="relative z-10 lg:pt-2">
          {currentUpgrades.length > 0 &&
            (!isMobile || showUpgrades) &&
            createPortal(
              <div className="fixed z-[9999] lg:top-2 max-lg:bottom-2  left-2 space-y-2">
                <div className="grid grid-cols-3 max-lg:bg-neutral-800 max-lg:p-1 gap-1 rounded-lg">
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
              </div>,
              document.body
            )}

          <motion.div
            layout
            className={`${
              turns === 0 && mission?.target > progress && "hidden"
            }   ${
              currentSpecial.length === 0
                ? "lg:h-[14rem] h-[8rem] aspect-square"
                : "w-fit"
            } relative lg:p-2 grid grid-cols-5 gap-2 w-full  rounded-xl bg-black/20 border border-white/10 shadow-inner`}
          >
            {currentSpecial.length === 0 && (
              <p className="text-center absolute top-1/2 text-xs lg: -translate-y-1/2 w-full text-white/50 ">
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
