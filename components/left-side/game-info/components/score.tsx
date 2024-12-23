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
    <div className=" lg:w-[18rem] w-[15rem] max-lg:text-xs bg-black/60 backdrop-blur-xl rounded-full p-0.5 lg:p-1 max-lg:flex max-lg:flex-col max-lg:justify-between">
      <ProgressBar target={target} />
    </div>
  );
};
