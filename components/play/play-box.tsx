"use client";

import { motion } from "framer-motion";
import { LockIcon, SwordIcon } from "lucide-react";
import Link from "next/link";

interface PlayBoxProps {
  stage: number;
  title: string;
  description: string;
  linkText: string;
  href: string;
  disabled?: boolean;
  videoSrc?: string;
}

export const PlayBox = ({
  stage,
  title,
  description,
  linkText,
  href,
  disabled,
  videoSrc,
}: PlayBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden text-white ${
        disabled ? "bg-neutral-900" : ""
      }  flex flex-col p-2 justify-between`}
    >
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="relative z-10">
        <p className=" bg-black/50 backdrop-blur-xl w-fit rounded-md py-1 px-2">
          Gate {stage}
        </p>
      </div>

      <div className="space-y-4 flex items-end justify-between relative z-10">
        <div className="space-y-2">
          <p className="text-2xl font-semibold leading-none">{title}</p>
          <p className="">{description}</p>
        </div>
        <Link
          prefetch={true}
          href={href}
          className={`${
            disabled ? "" : "bg-black"
          } [background:linear-gradient(45deg,#000,theme(colors.black)_50%,theme(colors.black))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.yellow.600/.48)_0%,theme(colors.yellow.500)_20%,theme(colors.yellow.300)_40%,theme(colors.yellow.500)_60%,theme(colors.neutral.700/.48)_100%)_border-box]  border-2 border-transparent animate-border    text-center font-medium  flex items-center justify-center rounded-full aspect-square h-12`}
        >
          {disabled ? (
            <LockIcon className="w-5 h-5" />
          ) : (
            <SwordIcon className="w-5 h-5" />
          )}
        </Link>
      </div>
    </motion.div>
  );
};
