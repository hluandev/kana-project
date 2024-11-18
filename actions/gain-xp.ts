"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface Props {
  id: string;
  currentExp: any;
  exp: number;
}

export async function gainxp({ id, exp, currentExp }: Props) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({ exp: currentExp + exp })
    .eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/menu/play/kana/", "page");
  // redirect("/menu/play/kana/");
}
