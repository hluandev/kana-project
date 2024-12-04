import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface UpdateLeaderboardProps {
  highest_score: number;
}

export async function updateLeaderboardServer({
  highest_score,
}: UpdateLeaderboardProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: activity } = await supabase
    .from("activity")
    .select("*")
    .eq("id", user.id)
    .single();

  await supabase
    .from("activity")
    .update({
      highest_hand: Math.max(activity.highest_hand ?? 0, highest_score ?? 0),
    })
    .eq("id", user.id);

  revalidatePath("/menu/", "page");
}
