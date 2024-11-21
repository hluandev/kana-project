"use client";

import { useScoreStore } from "@/store/useScoreStore";
import Card from "./card";
import ProgressiveBar from "./progressive-bar";

export default function Score() {
  const { score, multiplier } = useScoreStore();

  return (
    <div className="space-y-4">
      <Card className="h-40 flex flex-col gap-3 justify-center items-center">
        <p className="text-2xl leading-none">Score at least</p>
        <ProgressiveBar />
        <p className="text-2xl leading-none">to earn ¥</p>
      </Card>

      <Card className="h-36 p-0 grid grid-cols-2 overflow-hidden text-3xl divide-x divide-neutral-800">
        <p className="leading-none p-4 flex justify-center items-center">
          {score}
        </p>
        <p className="leading-none bg-rose-900/20 rounded-lg flex justify-center items-center">
          {multiplier}
        </p>
      </Card>
    </div>
  );
}
