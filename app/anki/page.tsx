import { attack } from "@/actions/attack";
import { InputAttack } from "@/components/InputAttack";
import { Monster } from "@/components/Monster";
import { createClient } from "@/utils/supabase/server";

const Anki = async () => {
  const supabase = createClient();

  let { data: pro, error } = await supabase
    .from("pro")
    .select("*")
    .eq("user_id", "44df6dcf-da1a-4ded-b117-9d317bacdca0")
    .limit(1)
    .single();

  let lastRandomIndex = null;
  let randomIndex = null;

  do {
    randomIndex = Math.floor(Math.random() * pro.reviews.length);
  } while (randomIndex === lastRandomIndex);

  lastRandomIndex = randomIndex;

  console.log(randomIndex);

  let { data: monsters } = await supabase
    .from("monsters")
    .select("*")
    .eq("id", pro.reviews[randomIndex])
    .limit(1)
    .single();

  return (
    <div className="relative h-full">
      <div className="relative flex justify-between">
        <div className="">
          <p className="font-semibold text-lg">TheLoong</p>
          <div className=" bg-gradient-to-t w-72 font-semibold from-[#df1818] to-red-800 border border-yellow-300  rounded-sm text-xl text-white text-center py-1">
            100
          </div>
        </div>

        <div className="text-6xl bg-yellow-400 py-3 px-4 border rounded-lg absolute left-1/2 -translate-x-1/2 font-semibold leading-none">
          10
        </div>

        <div className="">
          <p className="font-semibold text-lg text-right">本</p>
          <div className=" bg-gradient-to-t w-72 font-semibold from-purple-600 to-purple-900 border border-yellow-300  rounded-sm text-xl text-white text-center py-1">
            20
          </div>
        </div>
      </div>

      <Monster monsters={monsters} />

      <InputAttack monsters={monsters} pro={pro} />
    </div>
  );
};

export default Anki;
