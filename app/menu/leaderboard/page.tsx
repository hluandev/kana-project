"use client";

import { useScoreStore } from "@/stores/useScoreStore";

export default function Leaderboard() {
  const { leaderboard } = useScoreStore();

  console.log(leaderboard);
  return (
    <div className="space-y-4 flex flex-col">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-semibold">Leaderboard</h2>
        <p className=" text-xl">
          Top 100 players with highest hands in the last 30 days
        </p>
      </div>
      <div className="flex flex-col gap-4 text-xl flex-1 overflow-y-auto bg-white/50 p-4 rounded-2xl z-50">
        {leaderboard.map((player) => (
          <div
            key={player.id}
            className="flex bg-white p-4 rounded-xl items-center justify-between"
          >
            <div className="flex gap-2 items-center">
              <div className="bg-[#efcb68] aspect-square w-10 rounded-full flex items-center justify-center">
                {player.level}
              </div>
              <p className="font-semibold">{player.first_name}</p>
            </div>
            <p className="font-semibold">{player.highest_score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
