"use server";

import { createClient } from "@/utils/supabase/server";

export const updatePlayerCharacter = async (character: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  await supabase
    .from("profiles")
    .update({ character: character })
    .eq("id", user?.id);
};
