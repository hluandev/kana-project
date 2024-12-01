"use client";

import { ActivityBox } from "@/components/activity/activity-box";
import { GraphTable } from "@/components/activity/graph-table";
import { usePlayerStore } from "@/stores/usePlayerStore";

export default function Activity() {
  const { info } = usePlayerStore();
  return (
    <div className="h-full w-full pr-4">
      <div className="flex flex-col bg-white/50 space-y-4 rounded-2xl w-full p-8 h-full">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Hello {info.first_name},</h2>
          <p className="text-2xl font-medium">Level {info.level}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <ActivityBox title="Matches" value={info.wins + info.losses} />
          <ActivityBox title="Wins" value={info.wins} />
          <ActivityBox title="Losses" value={info.losses} />
          <ActivityBox title="Highest Score" value={info.highest_score} />
        </div>
        <GraphTable />
      </div>
    </div>
  );
}
