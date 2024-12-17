"use client";

import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";
import { SwordIcon } from "lucide-react";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="flex flex-col w-full max-lg:text-xs max-lg:justify-between">
      <div className="flex flex-col">
        <div className="">
          {announcement === ""
            ? "Hand"
            : announcement
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>

        <div className="lg:text-xl flex items-center gap-2 font-semibold max-lg:leading-none ">
          <div>
            <SwordIcon className="lg:w-5 lg:h-5 w-3 h-3" />
          </div>
          <p>{score * multiplier}</p>
        </div>
      </div>

      <div className="font-medium text-center grid lg:mt-2 mt-1 lg:gap-2 gap-1 grid-cols-2">
        <div className="lg:py-1.5 lg:py-1 bg-black/30 rounded-lg text-green-500">
          {score}
        </div>
        <div className="lg:py-1.5 lg:py-1 bg-black/30 rounded-lg text-red-500">
          {multiplier}
        </div>
      </div>
    </Box>
  );
};
