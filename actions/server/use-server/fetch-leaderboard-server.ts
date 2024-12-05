"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchLeaderboard() {
  const supabase = await createClient();
  let { data: leaderboard, error } = await supabase
    .from("leaderboard")
    .select("wins, highest_score, level, username")
    .limit(50)
    .order("highest_score", { ascending: false });

  if (error) {
    console.log(error);
  }

  return leaderboard;
}
