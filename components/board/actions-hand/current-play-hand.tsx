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
    multiplier,
  } = useScoreStore();
  const { info, updateLosses, updateMatches } = usePlayerStore();
  const { loadGame } = useGameStateStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  const target = isEndlessMode ? endlessTarget : mission?.target;

  const hasWonGame = !isEndlessMode && missionID === 8 && progress >= target;
  const hasWonEndless = isEndlessMode && progress >= target;
  useEffect(() => {
    drawHand();
    drawSpecial();
  }, [kana]);

  useEffect(() => {
    loadGame();
  }, []);

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
      <div className="flex items-center flex-col lg:pb-2 pb-28">
        <CurrentHand />
        <ActionsHand />
      </div>
    );
  };

  return (
    <div className={`${turns === 0 && target > progress && "h-full"}`}>
      {renderOutcome()}
    </div>
  );
}
