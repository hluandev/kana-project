import type { MetaFunction } from "@remix-run/node";
import { Main } from "~/components/Main";
import { Sidebar } from "~/components/Sidebar";

export const meta: MetaFunction = () => {
  return [
    { title: "OfAll" },
    { name: "description", content: "Tools for your flex" },
  ];
};

export default function Index() {
  return (
    <div className="grid grid-cols-12 h-full">
      <Sidebar />
      <Main />
    </div>
  );
}
