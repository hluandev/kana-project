"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function insertNewDayActivity() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;
  // Get today's date at midnight UTC
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  // Check if there's already a record for today
  const { data: existingRecord } = await supabase
    .from("activity")
    .select("*")
    .gte("created_at", today.toISOString())
    .lt("created_at", new Date(today.getTime() + 86400000).toISOString())
    .single();

  // If no record exists for today, create one
  if (!existingRecord) {
    const { data, error } = await supabase.from("activity").insert([
      {
        id: user.id,
        created_at: today.toISOString(),
        wins: 0,
        losses: 0,
        highest_hand: 0,
      },
    ]);

    if (error) {
      console.error("Error inserting new activity record:", error);
    }
  }

  revalidatePath("/menu/", "page");
}

interface UpdateActivityProps {
  result: boolean;
}

export async function updateActivityServer({ result }: UpdateActivityProps) {
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
    })
    .eq("id", user.id)
    .gte("created_at", today.toISOString())
    .lt("created_at", new Date(today.getTime() + 86400000).toISOString());

  revalidatePath("/menu/", "page");
}
