import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "JPDESU" }, { name: "description", content: "" }];
};

export default function Index() {
  return <div className="">This is great</div>;
}
