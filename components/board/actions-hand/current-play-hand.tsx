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
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import { updateActivityServer } from "@/actions/server/activity-server-actions";
import { useGameStateStore } from "@/stores/useGameStateStore";
import { VirtualKeyboard } from "./virtual-keyboard";
import { ProgressBar } from "@/components/left-side/game-info/components/progress-bar";
import { Score } from "@/components/left-side/game-info/components/score";
import { ScoreDamage } from "@/components/left-side/game-info/components/score-damage";
import { updatePlayerGate } from "@/actions/server/use-server/update-player-gate";

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

  // useEffect(() => {
  //   if (hasWonGame) {
  //     updatePlayerGateLocal(info.gate + 1);
  //     const updateGate = async () => {
  //       try {
  //         await updatePlayerGate();
  //       } catch (error) {
  //         console.error("Failed to update player gate:", error);
  //       }
  //     };
  //     updateGate();
  //   }
  // }, [bossHp <= 0]);

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
      <div className="flex items-center  w-full flex-col lg:pb-6 pb-28 space-y-2">
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
