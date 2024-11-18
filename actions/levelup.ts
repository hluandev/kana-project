"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface Props {
  id: string;
  level: number;
  kana: number;
}

export async function levelup({ id, level, kana }: Props) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({ level: level + 1, kana: kana + 1 })
    .eq("id", id);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/menu/play/kana/", "page");
  // redirect("/menu/play/kana/");
}
