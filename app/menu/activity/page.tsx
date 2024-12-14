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

  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:space-y-2 space-y-1 rounded-xl w-full h-full">
        <div className="grid grid-cols-4 lg:gap-2 gap-1">
          <ActivityBox
            loading={isLoading}
            title="Matches"
            value={info.matches}
          />
          <ActivityBox
            loading={isLoading}
            textColor="text-green-500"
            title="Wins"
            value={info.wins}
          />
          <ActivityBox
            loading={isLoading}
            textColor="text-red-500"
            title="Losses"
            value={info.losses}
          />
          <ActivityBox
            loading={isLoading}
            textColor="text-purple-500"
            title="All Time Highest Hand"
            value={info.highest_score}
          />
        </div>

        <div className="flex-1 flex lg:gap-2 gap-1">
          <GraphTable loading={isLoading} highestHandsTable={true} />
          <GraphTable loading={isLoading} highestHandsTable={false} />
        </div>
      </div>
    </div>
  );
}
