import type { MetaFunction } from "@remix-run/node";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [{ title: "JPDESU" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className="h-full grid grid-cols-12">
      <Nav />
      <Main />
    </div>
  );
}
