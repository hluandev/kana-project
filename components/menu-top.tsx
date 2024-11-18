import { createClient } from "@/utils/supabase/server";

export const MenuTop = async () => {
  const supabase = await createClient();

  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  return (
    <div className="flex  justify-between items-start p-12 z-10">
      <img src="/img/logo.svg" className="w-60" alt="" />

      <div className="relative">
        <div className="flex bg-white/20  backdrop-blur-xl  border">
          <div className=" h-12 aspect-square bg-white text-black flex justify-center text-xl font-bold items-center">
            {profiles.level}
          </div>
          <div className="w-60 pl-3 uppercase font-semibold flex items-center text-lg">
            {profiles.first_name}
          </div>
        </div>

        {/* <DailyQuests /> */}
      </div>
    </div>
  );
};
