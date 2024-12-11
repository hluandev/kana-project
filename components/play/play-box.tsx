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
        disabled ? "bg-neutral-700" : ""
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
        <p className=" bg-white/20 w-fit rounded-lg py-1 px-2">Gate {stage}</p>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="space-y-2">
          <p className="text-2xl font-semibold leading-none">{title}</p>
          <p className="">{description}</p>
        </div>
        <Link
          prefetch={true}
          href={href}
          className={`${
            disabled ? "" : "bg-black"
          } block  text-center font-medium w-full rounded-lg p-2`}
        >
          {linkText}
        </Link>
      </div>
    </motion.div>
  );
};
