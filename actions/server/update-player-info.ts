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

  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  const { error } = await supabase
    .from("profiles")
    .update({
      xp: xp,
      wins: wins,
      level: level,
      losses: losses,
      highest_score: Math.max(profiles.highest_score ?? 0, highest_score ?? 0),
    })
    .eq("id", id);

  revalidatePath("/menu/play/kana", "layout");
}
