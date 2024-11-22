"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchKana() {
  const supabase = await createClient();

  let { data: kana } = await supabase
    .from("kana")
    .select("*")
    .eq("special", false);

  return kana;
}
