import { Combo } from "@/components/combo";
import { EnemyCard } from "@/components/enemy-card";
import { PlayerHp } from "@/components/player-hp";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const Level = async ({ params }: any) => {
  const supabase = await createClient();

  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  if (params.level > profiles.kana) {
    redirect(`/menu/play/kana/${profiles.kana}`);
  }

  const { data } = await supabase
    .from("kana")
    .select("*")
    .in(
      "level",
      parseInt(params.level) === 7 || parseInt(params.level) === 15
        ? Array.from({ length: profiles.kana }, (_, index) => index + 1)
        : [params.level < profiles.kana ? params.level : profiles.kana]
    );

  return (
    <div className="flex-1 relative z-10 flex justify-center">
      <EnemyCard profiles={profiles} data={data} />
      <Combo />
      <PlayerHp />
    </div>
  );
};

export default Level;
