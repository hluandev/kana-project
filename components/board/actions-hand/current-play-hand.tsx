"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { CurrentHand } from "../current-hand";
import { ActionsHand } from "./actions-hand";
import { Win } from "@/components/results/win";
import { Lose } from "@/components/results/lose";
import { playSound } from "@/actions/client/play-sound";

export default function CurrentPlayHand() {
  const { kana, drawHand, drawSpecial, kanaMissions } = useKanaStore();

  const { turns, missionID, progress, setYen, yen } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  useEffect(() => {
    drawHand();
    drawSpecial();
  }, [kana]);

  useEffect(() => {
    const hasWon = progress >= mission?.target && turns >= 0;
    const isGameOver = turns === 0;

    if (hasWon && !isGameOver) {
      setYen(yen + 500);
    }
  }, [progress >= mission?.target]);

  useEffect(() => {
    if (turns > 0) {
      playSound("/audio/start.wav");
    }
  }, [missionID]);

  return (
    <div
      className={`${turns === 0 && progress <= mission?.target && "h-full"}`}
    >
      {turns === 0 ? (
        progress >= mission?.target ? (
          <Win />
        ) : (
          <Lose />
        )
      ) : progress >= mission?.target ? (
        <Win />
      ) : (
        <div className="flex items-center flex-col">
          <CurrentHand />
          <ActionsHand />
        </div>
      )}
    </div>
  );
}
