"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface SignUpProps {
  email: string;
  password: string;
}

export async function signup({ email, password }: SignUpProps) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function login({ email, password }: SignUpProps) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
