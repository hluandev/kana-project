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
    <div className="overflow-hidden w-full">
      <div className="flex flex-col space-y-2 rounded-2xl w-full h-full">
        <div className="grid grid-cols-4 gap-2">
          <ActivityBox
            loading={isLoading}
            title="Matches"
            value={info.matches}
          />
          <ActivityBox
            loading={isLoading}
            textColor="text-blue-600"
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

        <div className="flex h-full gap-2">
          <GraphTable loading={isLoading} highestHandsTable={true} />
          <GraphTable loading={isLoading} highestHandsTable={false} />
        </div>
      </div>
    </div>
  );
}
