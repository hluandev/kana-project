"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

interface Props {
  id: string;
  level: number;
}

export async function levelup({ id, level }: Props) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .update({ level: level + 1 })
    .eq("id", id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
