"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";

interface UpdatePlayerInfoProps {
  id: string;
  xp?: number;
  wins?: number;
  level?: number;
  matches?: number;
  losses?: number;
  highest_score?: number;
}

export async function updatePlayerInfoServer({
  id,
  xp,
  wins,
  level,
  matches,
  losses,
  highest_score,
}: UpdatePlayerInfoProps) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({
      xp: xp,
      wins: wins,
      level: level,
      matches: matches,
      losses: losses,
      highest_score: highest_score,
    })
    .eq("id", id);

  revalidatePath("/menu/play/kana", "layout");
}
