"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchHighestScoreServer() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("highest_score")
    .single();

  return data?.highest_score ?? 0;
}
