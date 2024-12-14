import { createClient } from "@/utils/supabase/server";

export async function fetchKana() {
  const supabase = await createClient();
  let { data: kana } = await supabase.from("kana").select("*");
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

export async function fetchPlayerInfo() {
  const supabase = await createClient();
  let { data: playerInfo } = await supabase
    .from("profiles")
    .select(
      "id, level, username, xp, wins, losses, highest_score, matches, gate"
    )
    .limit(1)
    .single();
  return playerInfo;
}
