"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { CurrentHand } from "../current-hand";
import { ActionsHand } from "./actions-hand";
import { Win } from "@/components/results/win";
import { Lose } from "@/components/results/lose";
import { playSound } from "@/actions/client/play-sound";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";

export default function CurrentPlayHand() {
  const { kana, drawHand, drawSpecial, kanaMissions } = useKanaStore();

  const { turns, missionID, progress, setYen, yen } = useScoreStore();

  const { info, updateXp, updateLevel, setXp } = usePlayerStore();

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
      updateXp(20);
      updatePlayerInfoServer({
        id: info.id,
        xp: info.xp + 20,
        wins: info.wins + 1,
        matches: info.matches + 1,
      });
    }
  }, [progress >= mission?.target]);

  useEffect(() => {
    if (info.xp >= 100) {
      const remainingXp = info.xp - 100;
      updateLevel(info.level + 1);
      setXp(remainingXp);
      updatePlayerInfoServer({
        id: info.id,
        level: info.level + 1,
        xp: remainingXp,
      });
    }
  }, [info.xp]);

  useEffect(() => {
    if (turns > 0) {
      playSound("/audio/start.wav");
    }
  }, [missionID]);

  useEffect(() => {
    const hasLost = turns === 0 && progress < mission?.target;

    if (hasLost) {
      updatePlayerInfoServer({
        id: info.id,
        losses: info.losses + 1,
        matches: info.matches + 1,
      });
    }
  }, [turns === 0]);

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
