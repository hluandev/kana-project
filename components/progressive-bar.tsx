"use client";

import { useScoreStore } from "@/store/useScoreStore";
import { useEffect } from "react";

export default function ProgressiveBar() {
  const { totalScore, score, multiplier, setTotalScore } = useScoreStore();

  useEffect(() => {
    setTotalScore(score * multiplier);
  }, [score]);

  return (
    <div className="bg-rose-900/30 border text-xl border-rose-800/50 w-full rounded-full p-1.5 text-center ">
      {totalScore} / 300
    </div>
  );
}
