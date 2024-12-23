"use client";

import { fetchLeaderboard } from "@/actions/server/use-server/fetch-leaderboard-server";
import { useScoreStore } from "@/stores/useScoreStore";
import { Loader2Icon } from "lucide-react";
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

  return (
    <div className="space-y-4 flex flex-col max-lg:w-full max-lg:px-4 py-4">
      <div className="text-center ">
        <h2 className="text-lg font-semibold">Leaderboard</h2>
        <p className="">Top 50 players with highest score</p>
      </div>
      <div className="flex flex-col gap-2 flex-1 lg:w-96 overflow-y-auto bg-black/5 border border-white/30 shadow-inner p-2 rounded-xl z-50">
        {!isLoading ? (
          leaderboard.map((player) => (
            <div
              key={player.id}
              className="flex bg-neutral-800 pl-2 py-2 pr-4 rounded-xl  items-center justify-between"
            >
              <div className="flex gap-2 items-center">
                <div className="bg-[#efcb68] text-black  aspect-square w-8 rounded-lg flex items-center justify-center">
                  {player.level}
                </div>
                <p className="font-semibold">{player.username}</p>
              </div>
              <p className="">{player.highest_score}</p>
            </div>
          ))
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            <Loader2Icon className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
