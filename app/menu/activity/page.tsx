"use client";

import { usePlayerStore } from "@/stores/usePlayerStore";

export default function Activity() {
  const { info } = usePlayerStore();
  return (
    <div className="flex flex-col gap-4">
      <h2>Hello {info.first_name},</h2>
      <p>Level {info.level}</p>
      <p>Matches {info.wins + info.losses}</p>
      <p>Wins {info.wins}</p>
      <p>Losses {info.losses}</p>
      <p>Highest Score {info.highest_score}</p>
    </div>
  );
}
