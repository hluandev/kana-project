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
        <button
          onClick={() => {
            if (pathname === `/menu/play/kana/${pathname.slice(16)}`) {
              router.push("kana");
            }
            router.back();
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}
    </>
  );
};
