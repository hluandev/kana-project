"use server";

import { createClient } from "@/utils/supabase/server";

export const checkIfUserAvailable = async (email: string) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: "most-pass-that-wont-work",
  });

  // If we get "Invalid login credentials" error, the user exists
  // If we get "Email not confirmed" error, the user exists
  // If we get any other error, the user doesn't exist
  if (
    error?.message === "Invalid login credentials" ||
    error?.message === "Email not confirmed"
  ) {
    return false;
  }

  return true;
};
