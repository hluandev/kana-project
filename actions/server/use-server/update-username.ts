"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function checkUsername(username: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .select("username")
    .ilike("username", username)
    .single();

  if (error) {
    console.log(error);
    return true;
  }

  return false;
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
      username,
    },
  ]);

  redirect("/menu/play");
}
