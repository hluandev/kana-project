"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchActivityServer() {
  const supabase = await createClient();
  let { data: activity } = await supabase
    .from("activity")
    .select("created_at, wins, losses, highest_score")
    .order("created_at");
  return activity;
}
