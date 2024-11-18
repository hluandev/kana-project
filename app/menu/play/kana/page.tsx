import { KanaBoard } from "@/components/kana-board";
import { createClient } from "@/utils/supabase/server";
import { LockIcon } from "lucide-react";
import Link from "next/link";

const Kana = async () => {
  const supabase = await createClient();
  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .limit(1)
    .single();

  // const { data, error } = await supabase
  //   .from("kana")
  //   .select("*")
  //   .eq("level", profiles.level)
  //   .limit(1)
  //   .single();

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-1/2 w-full -translate-x-1/2 z-10 flex justify-center items-center px-12">
      <KanaBoard profiles={profiles} />
    </div>
  );
};

export default Kana;
