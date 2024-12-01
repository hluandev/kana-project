import Link from "next/link";

export const LeftDocs = () => {
  return (
    <div className="border-r border-black/20 w-64 flex flex-col gap-3 items-start">
      <Link href={"/menu/docs"} className="text-lg pl-0.5">
        1. Introduction
      </Link>
      <Link href={"docs/rules"} className="text-lg">
        2. Rules
      </Link>
      <Link href={"docs/hands"} className="text-lg">
        3. Hands
      </Link>
      <Link href={"docs/rewards"} className="text-lg">
        4. Rewards
      </Link>
      <Link href={"docs/shop"} className="text-lg">
        5. Shop
      </Link>
    </div>
  );
};
