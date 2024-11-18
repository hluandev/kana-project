"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface Props {
  id: string;
  currentLevel: number;
  currentExp: number;
  levelNumber: number;
  level: any;
}

export async function levelup({
  id,
  currentLevel,
  level,
  currentExp,
  levelNumber,
}: Props) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({
      level: currentLevel + level,
      exp: currentExp - levelNumber * 100,
    })
    .eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/menu/play/kana/", "page");
  // redirect("/menu/play/kana/");
}
