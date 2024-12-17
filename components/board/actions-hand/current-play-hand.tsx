"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { CurrentHand } from "../current-hand";
import { ActionsHand } from "./actions-hand";
import { Win } from "@/components/results/win";
import { Lose } from "@/components/results/lose";
import { WinTheGame } from "@/components/results/win-the-game";
import { playSound } from "@/actions/client/play-sound";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useGameStateStore } from "@/stores/useGameStateStore";
import { Score } from "@/components/left-side/game-info/components/score";

export default function CurrentPlayHand() {
  const {
    kana,
    drawHand,
    drawSpecial,
    kanaMissions,
    generateRandomSpecialCards,
  } = useKanaStore();
  const {
    turns,
    missionID,
    progress,
    isEndlessMode,
    endlessTarget,
    score,
    bossHp,
    multiplier,
  } = useScoreStore();
  const { loadGame } = useGameStateStore();
  const { info, updatePlayerGateLocal } = usePlayerStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  const target = isEndlessMode ? endlessTarget : mission?.target;

  // const hasWonGame = !isEndlessMode && missionID === 8 && progress >= target;
  const hasWonGame = bossHp <= 0;
  const hasWonEndless = isEndlessMode && progress >= target;
  useEffect(() => {
    drawHand();
    drawSpecial();
  }, [kana]);

  // useEffect(() => {
  //   loadGame();
  // }, []);

  useEffect(() => {
    if (turns === 4) {
      playSound("START");
      generateRandomSpecialCards();
    }
  }, [missionID]);

  const renderOutcome = () => {
    if (hasWonGame) {
      return <WinTheGame />;
    }
    if (hasWonEndless) {
      return <Win />;
    }
    if (turns === 0) {
      return progress >= target ? <Win /> : <Lose />;
    }
    return progress >= target ? (
      <Win />
    ) : (
      <div className="flex items-center w-full flex-col max-lg:pb-[7.2rem] pb-2 space-y-1 lg:space-y-2">
        <Score />
        <CurrentHand />
        <ActionsHand />
      </div>
    );
  };

  return (
    <div
      className={`${
        turns === 0 && target > progress && "h-full"
      } relative z-10`}
    >
      {renderOutcome()}
    </div>
  );
}
