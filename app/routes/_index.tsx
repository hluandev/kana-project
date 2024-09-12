import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "OfAll" },
    { name: "description", content: "Tools for your flex" },
  ];
};

export default function Index() {
  return <div className=""></div>;
}
