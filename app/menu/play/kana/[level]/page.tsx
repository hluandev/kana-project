import { Combo } from "@/components/combo";
import { EnemyCard } from "@/components/enemy-card";
import { PlayerHp } from "@/components/player-hp";
import { createClient } from "@/utils/supabase/server";

const Level = async ({ params }: any) => {
  const supabase = await createClient();

  console.log(params.level);

  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  // let { data } = await supabase
  //   .from("kana")
  //   .select("*")
  //   .in(
  //     "level",
  //     Array.from({ length: profiles.kana }, (_, index) => index - 1)
  //   );

  let { data } = await supabase
    .from("kana")
    .select("*")
    .eq(
      "level",
      parseInt(params.level) < profiles.kana ? params.level : profiles.kana
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
