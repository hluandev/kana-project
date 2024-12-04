"use client";

import { fetchLeaderboard } from "@/actions/server/use-server/fetch-leaderboard-server";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const { leaderboard, setLeaderboard } = useScoreStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLeaderboard();
        setLeaderboard(data || []);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#efcb68]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4 flex flex-col">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Leaderboard</h2>
        <p className="">Top 100 players with highest hand in 1 turn</p>
      </div>
      <div className="flex flex-col gap-4 flex-1 overflow-y-auto bg-white/50 border border-black/15 shadow-sm p-2 rounded-2xl z-50">
        {leaderboard.map((player) => (
          <div
            key={player.id}
            className="flex bg-white pl-2 py-2 pr-4 rounded-xl border border-black/15 shadow-sm items-center justify-between"
          >
            <div className="flex gap-2 items-center">
              <div className="bg-[#efcb68] border border-black/15 shadow-sm aspect-square w-10 rounded-full flex items-center justify-center">
                {player.level}
              </div>
              <p className="font-semibold">{player.username}</p>
            </div>
            <p className="font-semibold">{player.highest_score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
