"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
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
        <Link
          href={
            pathname === `/menu/play/kana/${pathname.slice(16)}`
              ? "/menu/play/kana"
              : "#"
          }
          onClick={() => {
            if (pathname !== `/menu/play/kana/${pathname.slice(16)}`) {
              router.back();
            }
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Link>
      )}
    </>
  );
};
