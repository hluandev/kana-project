"use server";

import { createClient } from "@/utils/supabase/server";

export const updatePlayerGate = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  let { data: profiles } = await supabase
    .from("profiles")
    .select("gate")
    .eq("id", user.id)
    .limit(1)
    .single();

  await supabase
    .from("profiles")
    .update({ gate: profiles?.gate + 1 })
    .eq("id", user.id);
};
