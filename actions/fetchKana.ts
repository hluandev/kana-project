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

export async function fetchKanaMissions() {
  const supabase = await createClient();
  let { data: kanaMissions } = await supabase.from("kana_missions").select("*");
  return kanaMissions;
}

export async function fetchKanaSpecial() {
  const supabase = await createClient();
  let { data: kanaSpecial } = await supabase.from("kana_special").select("*");
  return kanaSpecial;
}
