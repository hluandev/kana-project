import { motion } from "framer-motion";
import { BossHp } from "./boss-hp";

interface AvatarsProps {
  videoSrc?: string;
  name: string;
}

export const Avatars = ({ videoSrc, name }: AvatarsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative rounded-2xl shadow-lg overflow-hidden h-[30rem] w-[20rem] text-white flex flex-col p-2 justify-between`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="relative z-10">
        <BossHp />
      </div>

      <div className="space-y-4 flex items-end justify-between relative z-10">
        <div className="space-y-2">
          <p className="text-2xl font-semibold leading-none">{name}</p>
          <p className="">fas</p>
        </div>
      </div>
    </motion.div>
  );
};
