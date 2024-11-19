"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export const Logo = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {pathname === "/menu" ? (
        <img src="/img/logo.svg" className="w-60" alt="" />
      ) : (
        <button onClick={() => router.back()}>
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}
    </>
  );
};
