"use client";

import { useVideoUrl } from "@/hooks/useVideoUrl";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { motion } from "framer-motion";
import { Loader2Icon, LockIcon, SwordIcon } from "lucide-react";
import Link from "next/link";

interface PlayBoxProps {
  stage: number;
  title: string;
  description: string;
  linkText: string;
  href: string;
  comingSoon?: boolean;
  disabled?: boolean;
  videoSrc: string;
}

export const PlayBox = ({
  stage,
  title,
  description,
  href,
  disabled,
  comingSoon,
  videoSrc,
}: PlayBoxProps) => {
  const { videoUrl, loading } = useVideoUrl(videoSrc);
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden text-white ${
        disabled ? "bg-black/30" : ""
      }  flex flex-col p-2 justify-between`}
    >
      {videoSrc && !loading ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover  mix-blend-overlay"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Loader2Icon className="w-10 h-10 animate-spin" />
        </div>
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
        <div className="flex justify-between items-end gap-4">
          {comingSoon && (
            <p className="border-2 border-transparent animate-border  py-2 px-3  text-center font-medium  flex items-center justify-center rounded-full [background:linear-gradient(45deg,#000,theme(colors.black)_50%,theme(colors.black))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.violet.600/.48)_0%,theme(colors.violet.500)_20%,theme(colors.violet.300)_40%,theme(colors.violet.500)_60%,theme(colors.neutral.700/.48)_100%)_border-box]">
              Coming Soon
            </p>
          )}
          <Link
            prefetch={true}
            href={href}
            className={`${
              disabled
                ? "bg-black"
                : "[background:linear-gradient(45deg,#000,theme(colors.black)_50%,theme(colors.black))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.yellow.600/.48)_0%,theme(colors.yellow.500)_20%,theme(colors.yellow.300)_40%,theme(colors.yellow.500)_60%,theme(colors.neutral.700/.48)_100%)_border-box] "
            }  border-2 border-transparent animate-border    text-center font-medium  flex items-center justify-center rounded-full aspect-square h-12 `}
          >
            {disabled ? (
              <LockIcon className="w-5 h-5" />
            ) : (
              <SwordIcon className="w-5 h-5" />
            )}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
