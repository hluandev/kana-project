import type { MetaFunction } from "@remix-run/node";
import { supabase } from "utils/supabase";
import { Connect } from "~/components/Connect";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [{ title: "JPDESU" }, { name: "description", content: "" }];
};

export const loader = async () => {
  let { data: pro } = await supabase
    .from("pro")
    .select("*")
    .eq("user_id", "44df6dcf-da1a-4ded-b117-9d317bacdca0")
    .limit(1)
    .single();

  const randomIndex = Math.floor(Math.random() * pro.reviews.length);

  let { data: monsters } = await supabase
    .from("monsters")
    .select("*")
    .eq("id", pro.reviews[randomIndex])
    .limit(1)
    .single();
  return monsters;
};

export const action = async () => {};

export default function Index() {
  return (
    <div className="h-full grid grid-cols-12">
      <Nav />
      <Main />
      <Connect />
    </div>
  );
}
