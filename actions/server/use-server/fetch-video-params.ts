"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchVideoParams(gate: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("gate")
    .select("*")
    .eq("level", gate)
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching video params:", error);
    throw error;
  }

  return data;
}
