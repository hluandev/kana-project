"use client";

import { playSound } from "@/actions/functions/play-sound";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

export const MenuLink = ({ text, href }: Props) => {
  return (
    <Link
      onClick={() => {
        playSound("/audio/onclick.wav");
        playSound("/audio/ambient.wav");
      }}
      onMouseEnter={() => {
        playSound("/audio/click.wav");
      }}
      className="hover:text-pink-500"
      prefetch
      href={href}
    >
      {text}
    </Link>
  );
};
