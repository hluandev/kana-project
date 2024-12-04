"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

interface UpdatePlayerInfoProps {
  id: string;
  xp?: number;
  wins?: number;
  level?: number;
  losses?: number;
  highest_score?: number;
}

export async function updatePlayerInfoServer({
  id,
  xp,
  wins,
  level,
  losses,
  highest_score,
}: UpdatePlayerInfoProps) {
  const supabase = await createClient();

  // Get current profile data
  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  // Update profiles table
  await supabase
    .from("profiles")
    .update({
      xp: xp,
      wins: wins,
      level: level,
      losses: losses,
      highest_score: Math.max(profiles.highest_score ?? 0, highest_score ?? 0),
    })
    .eq("id", id);

  if (profiles) {
    // Always update level and wins if provided
    const updateData: any = {
      level: level ?? profiles.level,
      wins: wins ?? profiles.wins,
    };

    // Only update highest_hand if we have a new highest score
    if (highest_score) {
      updateData.highest_hand = Math.max(
        profiles.highest_score ?? 0,
        highest_score
      );
    }

    await supabase.from("leaderboard").update(updateData).eq("id", id);
  }

  revalidatePath("/menu/play/kana", "layout");
}
