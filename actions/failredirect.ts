"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function failredirect() {
  //   const supabase = createClient();

  revalidatePath("/", "layout");
  redirect("/anki");
}