import { createClient } from "@/utils/supabase/server";
import { Logo } from "./logo";
import { PlayerInfo } from "./player-info";

export const MenuTop = async () => {
  const supabase = await createClient();

  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  return (
    <div className="flex  justify-between items-start p-12 z-10">
      <Logo />

      <PlayerInfo profiles={profiles} />
    </div>
  );
};
