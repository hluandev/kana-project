"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { Lose } from "./lose";
import { Win } from "./win";
import { useKanaStore } from "@/stores/useKanaStore";
import { useEffect } from "react";
import { WinTheGame } from "./win-the-game";

export const Results = () => {
  const { turns, missionID, progress, setYen, yen } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  useEffect(() => {
    const hasWon = progress >= mission?.target && turns > 0;
    const isGameOver = turns === 0;

    if (hasWon && !isGameOver) {
      setYen(yen + 500);
    }
  }, [progress >= mission?.target]);

  const hasWonGame = missionID === 8 && progress >= mission?.target;

  return (
    <>
      {hasWonGame ? (
        <WinTheGame />
      ) : (
        <>
          {turns > 0 && progress >= mission?.target && <Win />}
          {turns === 0 && (progress >= mission?.target ? <Win /> : <Lose />)}
        </>
      )}
    </>
  );
};
