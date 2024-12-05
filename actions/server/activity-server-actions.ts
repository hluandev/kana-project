"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface UpdateActivityProps {
  result?: boolean;
  highest_score?: number;
}

export async function updateActivityServer({
  result,
  highest_score,
}: UpdateActivityProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const { data: activity } = await supabase
    .from("activity")
    .select("*")
    .gte("created_at", today.toISOString())
    .lt("created_at", new Date(today.getTime() + 86400000).toISOString())
    .single();

  await supabase
    .from("activity")
    .update({
      wins: activity.wins + (result ? 1 : 0),
      losses: activity?.losses + (result ? 0 : 1),
      highest_score: Math.max(activity.highest_score ?? 0, highest_score ?? 0),
    })
    .eq("id", user.id)
    .gte("created_at", today.toISOString())
    .lt("created_at", new Date(today.getTime() + 86400000).toISOString());

  revalidatePath("/menu/", "page");
}
