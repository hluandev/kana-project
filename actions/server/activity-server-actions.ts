"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface UpdateActivityProps {
  highest_score?: number;
  wins?: number;
  losses?: number;
  matches?: number;
}

export async function updateActivityServer({
  highest_score,
  wins,
  losses,
  matches,
}: UpdateActivityProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const now = new Date();
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const { data: activity } = await supabase
    .from("activity")
    .select("*")
    .lte("created_at", now.toISOString())
    .gte("created_at", today.toISOString())
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (!activity) {
    await supabase.from("activity").insert([
      {
        id: user.id,
        created_at: today.toISOString(),

        highest_score: highest_score ?? 0,
      },
    ]);
  } else {
    await supabase
      .from("activity")
      .update({
        highest_score: Math.max(
          activity.highest_score ?? 0,
          highest_score ?? 0
        ),
        wins: wins,
        losses: losses,
        matches: matches,
      })
      .eq("id", user.id)
      .eq("created_at", activity.created_at);
  }

  revalidatePath("/menu/", "page");
}
