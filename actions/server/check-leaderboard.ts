"use server";

import { createClient } from "@/utils/supabase/server";

export async function checkAndAddToLeaderboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  // Get user's profile info
  const { data: profile } = await supabase
    .from("profiles")
    .select("username, level")
    .eq("id", user.id)
    .single();

  if (!profile) return;

  // Check if user exists in leaderboard
  const { data: existingEntry } = await supabase
    .from("leaderboard")
    .select("id")
    .eq("id", user.id)
    .single();

  // If user doesn't exist in leaderboard, add them
  if (!existingEntry) {
    await supabase.from("leaderboard").insert([
      {
        id: user.id,
        username: profile.username,
        level: profile.level,
        highest_hand: 0,
        wins: 0,
      },
    ]);
  }
}
