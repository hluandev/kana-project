"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const fetchMessagesServer = async () => {
  const supabase = await createClient();
  let { data: reports } = await supabase
    .from("reports")
    .select("*")
    .order("created_at", { ascending: false });

  return reports;
};

export const setMessageReadServer = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { error } = await supabase
    .from("reports")
    .update({ read: true })
    .eq("id", user.id);

  if (error) {
    console.log(error);
    return null;
  }

  // Fetch and return updated messages
  const { data: updatedMessages } = await supabase
    .from("reports")
    .select("*")
    .order("created_at", { ascending: false });

  return updatedMessages;
};
