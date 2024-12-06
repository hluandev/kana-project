"use client";

import { fetchActivityServer } from "@/actions/server/use-server/fetch-activity-server";
import { fetchHighestScoreServer } from "@/actions/server/use-server/fetch-highest-score-server";
import { ActivityBox } from "@/components/activity/activity-box";
import { GraphTable } from "@/components/activity/graph-table";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect, useState } from "react";

export default function Activity() {
  const { info, setActivity, updateHighestScore } = usePlayerStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activityData, highestScore] = await Promise.all([
          fetchActivityServer(),
          fetchHighestScoreServer(),
        ]);

        setActivity(activityData || []);
        updateHighestScore(highestScore);
      } catch (error) {
        console.error("Error fetching activity:", error);
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
    <div className="h-full w-full">
      <div className="flex flex-col space-y-4 rounded-2xl w-full h-full">
        <div className="grid grid-cols-4 gap-4">
          <ActivityBox title="Matches" value={info.wins + info.losses} />
          <ActivityBox
            textColor="text-blue-600"
            title="Wins"
            value={info.wins}
          />
          <ActivityBox
            textColor="text-red-500"
            title="Losses"
            value={info.losses}
          />
          <ActivityBox
            textColor="text-purple-500"
            title="All Time Highest Hand"
            value={info.highest_score}
          />
        </div>

        <div className="flex h-full gap-4 w-full">
          <GraphTable highestHandsTable={true} />
          <GraphTable highestHandsTable={false} />
        </div>
      </div>
    </div>
  );
}
