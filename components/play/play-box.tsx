"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PlayBoxProps {
  stage: number;
  title: string;
  description: string;
  linkText: string;
  href: string;
  disabled?: boolean;
}

export const PlayBox = ({
  stage,
  title,
  description,
  linkText,
  href,
  disabled,
}: PlayBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      className={` ${
        disabled ? "bg-neutral-400" : "bg-[#00b6df]"
      }  bg-opacity-30 border border-black/10 shadow-sm p-3 rounded-xl h-[17rem] lg:h-[20rem] w-[13rem] lg:w-[16rem] flex flex-col justify-between`}
    >
      <p className="text-sm border border-black/10 bg-white/30 w-fit rounded-lg py-1 px-2">
        Stage {stage}
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xl font-medium leading-none">{title}</p>
          <p className="text-black/60 text-sm">{description}</p>
        </div>
        <Link
          prefetch={true}
          href={href}
          className={`${
            disabled ? "bg-black/10" : "mainBgColor"
          } block border text-sm border-black/10 shadow-sm text-center font-medium w-full rounded-lg  p-1.5`}
        >
          {linkText}
        </Link>
      </div>
    </motion.div>
  );
};
