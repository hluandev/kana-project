"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { Lose } from "./lose";
import { Win } from "./win";
import { useKanaStore } from "@/stores/useKanaStore";

export const Results = () => {
  const { turns, missionID, progress } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <>
      {turns > 0 && progress >= mission?.target && <Win />}
      {turns === 0 && (progress >= mission?.target ? <Win /> : <Lose />)}
    </>
  );
};
