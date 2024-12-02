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

export default function CurrentPlayHand() {
  const { kana, drawHand, drawSpecial, kanaMissions } = useKanaStore();
  const { turns, missionID, progress, isEndlessMode, endlessTarget } =
    useScoreStore();
  const { info, updateGameResult } = usePlayerStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  const target = isEndlessMode ? endlessTarget : mission?.target;

  const hasWonGame = !isEndlessMode && missionID === 8 && progress >= target;
  const hasWonEndless = isEndlessMode && progress >= target;

  useEffect(() => {
    drawHand();
    drawSpecial();
  }, [kana]);

  useEffect(() => {
    if (turns > 0) {
      playSound("/audio/start.wav");
    }
  }, [missionID]);

  useEffect(() => {
    const hasLost = turns === 0 && progress < target;

    if (hasLost) {
      updatePlayerInfoServer({
        id: info.id,
        losses: info.losses + 1,
        matches: info.matches + 1,
      });
      updateActivityServer({ result: false });
      updateGameResult(false);
    }
  }, [turns === 0]);

  return (
    <div className={`${turns === 0 && target > progress && "h-full"}`}>
      {hasWonGame ? (
        <WinTheGame />
      ) : hasWonEndless ? (
        <Win />
      ) : turns === 0 ? (
        progress >= target ? (
          <Win />
        ) : (
          <Lose />
        )
      ) : progress >= target ? (
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
