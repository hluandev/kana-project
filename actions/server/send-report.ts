"use server";

import { createClient } from "@/utils/supabase/server";

interface Report {
  text: string;
}

export const sendReport = async (text: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from("reports")
    .insert([{ text: text, id: user?.id }]);

  if (error) throw error;
};
