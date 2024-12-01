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
    .select("*")
    .limit(1)
    .single();
  return playerInfo;
}

export async function fetchLeaderboard() {
  const supabase = await createClient();
  let { data: leaderboard } = await supabase
    .from("leaderboard")
    .select("first_name, highest_score, level")
    .order("highest_score", { ascending: false });
  return leaderboard;
}

export async function fetchActivity() {
  const supabase = await createClient();
  let { data: activity } = await supabase
    .from("activity")
    .select("created_at, wins, losses");
  return activity;
}
