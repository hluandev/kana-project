"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { Lose } from "./lose";
import { Win } from "./win";
import { useKanaStore } from "@/stores/useKanaStore";

export const Results = () => {
  const { turns, score, multiplier } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  const mission = kanaMissions.find((mission) => mission.id === 1);

  return (
    <>
      {turns > 0 && score * multiplier >= mission?.target && <Win />}
      {turns === 0 &&
        (score * multiplier >= mission?.target ? <Win /> : <Lose />)}
    </>
  );
};
