"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchLeaderboard() {
  const supabase = await createClient();
  let { data: leaderboard } = await supabase
    .from("leaderboard")
    .select("wins, highest_hand, level, username")
    .limit(50);

  return leaderboard;
}
