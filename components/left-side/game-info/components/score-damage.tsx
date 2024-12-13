"use client";

import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";
import { SwordIcon } from "lucide-react";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="flex flex-col w-full max-lg:justify-between lg:gap-1">
      <div className="flex flex-col gap-1">
        <div className="">
          {announcement === ""
            ? "Hand"
            : announcement
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>

        <div className="text-xl flex items-center gap-2 font-semibold max-lg:leading-none ">
          <div>
            <SwordIcon className="w-5 h-5" />
          </div>
          <p>{score * multiplier}</p>
        </div>
      </div>

      <div className="font-medium text-center grid lg:mt-2 mt-1 lg:gap-2 gap-1 grid-cols-2">
        <div className="py-1.5 bg-black/30 rounded-lg text-blue-600">
          {score}
        </div>
        <div className="py-1.5 bg-black/30 rounded-lg text-red-500">
          {multiplier}
        </div>
      </div>
    </Box>
  );
};
