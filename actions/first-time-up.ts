"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface Props {
  id: string;
  first_time_kana: number;
}

export async function firsttimekanaup({ id, first_time_kana }: Props) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({ first_time_kana: first_time_kana + 1 })
    .eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/menu/play/kana/", "page");
  // redirect("/menu/play/kana/");
}
