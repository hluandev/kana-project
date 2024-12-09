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
    <Box className="space-y-1 max-lg:flex max-lg:flex-col max-lg:justify-between">
      <div className="text-black/50 max-lg:text-xs flex justify-center items-center lg:pb-4 ">
        Score at least {target} points to clear this round.
      </div>
      <ProgressBar target={target} />
    </Box>
  );
};
