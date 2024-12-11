"use client";

import { Box } from "@/components/box";
import { ProgressBar } from "./progress-bar";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const Score = () => {
  const { kanaMissions } = useKanaStore();
  const { missionID, isEndlessMode, endlessTarget } = useScoreStore();

  const target = isEndlessMode
    ? endlessTarget
    : kanaMissions.find((mission) => mission.id === missionID)?.target || 0;

  return (
    <div className=" w-[18rem] bg-black/60 backdrop-blur-xl rounded-full p-1 max-lg:flex max-lg:flex-col max-lg:justify-between">
      <ProgressBar target={target} />
    </div>
  );
};
