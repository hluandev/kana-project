"use client";

import { ActivityBox } from "@/components/activity/activity-box";
import { GraphTable } from "@/components/activity/graph-table";
import { usePlayerStore } from "@/stores/usePlayerStore";

export default function Activity() {
  const { info } = usePlayerStore();
  return (
    <div className="h-full w-full pr-4">
      <div className="flex flex-col bg-white/50 space-y-4 rounded-2xl w-full p-4 h-full">
        <div className="grid grid-cols-4 gap-4">
          <ActivityBox title="Matches" value={info.wins + info.losses} />
          <ActivityBox
            textColor="text-blue-300"
            title="Wins"
            value={info.wins}
          />
          <ActivityBox
            textColor="text-[#ff915a]"
            title="Losses"
            value={info.losses}
          />
          <ActivityBox
            textColor="text-[#efcb68]"
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
