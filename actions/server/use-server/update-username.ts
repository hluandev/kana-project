"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function checkUsername(username: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("leaderboard")
    .select("username")
    .ilike("username", username)
    .limit(1)
    .single();

  if (error) {
    return false;
  } else {
    return true;
  }
}

export async function updateUsername(username: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not found");
  }

  await supabase.from("profiles").update({ username }).eq("id", user.id);

  await supabase.from("leaderboard").insert([
    {
      id: user.id,
      username: username,
    },
  ]);

  redirect("/menu/play");
}
