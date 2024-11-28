"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useScoreStore } from "@/stores/useScoreStore";
import { Win } from "../results/win";

export const CurrentHand = () => {
  const {
    kana,
    drawHand,
    currentHand,
    currentDeck,
    drawSpecial,
    kanaMissions,
  } = useKanaStore();

  const { turns, missionID, progress, setYen, yen } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  useEffect(() => {
    drawHand();
    drawSpecial();
  }, [kana]);

  useEffect(() => {
    const hasWon = progress >= mission?.target && turns > 0;
    const isGameOver = turns === 0;

    if (hasWon && !isGameOver) {
      setYen(yen + 500);
    }
  }, [progress >= mission?.target]);

  return (
    <div className="w-full z-20">
      {turns >= 0 && progress >= mission?.target ? (
        <Win />
      ) : (
        <motion.div layout className="flex gap-2 flex-wrap justify-center">
          {currentHand?.map((item) => (
            <Card card={item} key={item.id} />
          ))}
        </motion.div>
      )}

      <div className="absolute right-5 bottom-5 bg-[#1e2022] rounded-full border border-[#2e3032] text-xl font-bold font-mono h-14 w-14 flex items-center justify-center">
        {currentDeck.length}
      </div>
    </div>
  );
};
