import { motion } from "framer-motion";
import { BossHp } from "./boss-hp";
import { PlayerHp } from "../player-hp";
import { useScoreStore } from "@/stores/useScoreStore";

interface AvatarsProps {
  videoSrc?: string;
  name: string;
  player?: boolean;
}

export const Avatars = ({ videoSrc, name, player }: AvatarsProps) => {
  const { turns } = useScoreStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        player && turns === 0 && "grayscale"
      } relative rounded-2xl shadow-lg overflow-hidden h-[30rem] w-[20rem] text-white flex flex-col p-2 justify-between`}
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

      <div className="relative z-10">{player ? <PlayerHp /> : <BossHp />}</div>

      {!player && (
        <div className="space-y-4 flex items-end justify-between relative z-10">
          <div className="space-y-2">
            <p className="text-2xl font-semibold leading-none">{name}</p>
            <p className="">fas</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};
