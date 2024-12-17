"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftDocs = () => {
  const pathname = usePathname();

  return (
    <div className="border-r border-white/10  w-48 lg:w-56 lg:p-4 p-2  flex flex-col gap-2 items-start">
      <Link
        prefetch={true}
        href={"/menu/docs"}
        className={`pl-0.5 ${
          pathname === "/menu/docs" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        1. Introduction
      </Link>
      <Link
        prefetch={true}
        href={"/menu/docs/rules"}
        className={`${
          pathname === "/menu/docs/rules" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        2. Rules
      </Link>
      <Link
        prefetch={true}
        href={"/menu/docs/hands"}
        className={`${
          pathname === "/menu/docs/hands" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        3. Hands
      </Link>
      <Link
        prefetch={true}
        href={"/menu/docs/shop"}
        className={`${
          pathname === "/menu/docs/shop" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        4. Shop
      </Link>
    </div>
  );
};
