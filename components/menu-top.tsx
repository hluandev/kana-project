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
          <div className=" h-14 aspect-square bg-white text-black flex justify-center text-2xl font-bold items-center">
            {profiles.level}
          </div>

          {/* Right */}
          <div className="flex flex-col">
            <div className="w-60 flex-1 pl-3 uppercase font-semibold flex items-center text-xl">
              {profiles.first_name}
            </div>
            <div className="bg-white/30  py-[2px] text-center text-sm leading-none">
              {profiles.exp} / 100
            </div>
          </div>
        </div>

        {/* <DailyQuests /> */}
      </div>
    </div>
  );
};
