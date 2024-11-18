"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface Props {
  id: string;
  kana: number;
}

export async function kanaup({ id, kana }: Props) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({ kana: kana + 1 })
    .eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/menu/play/kana/", "page");
  // redirect("/menu/play/kana/");
}
