import { motion } from "framer-motion";
import { BossHp } from "./boss-hp";
import { PlayerHp } from "../player-hp";
import { useScoreStore } from "@/stores/useScoreStore";
import { useVideoUrl } from "@/hooks/useVideoUrl";
import { Loader2Icon } from "lucide-react";

interface AvatarsProps {
  videoSrc?: string;
  name: string;
  player?: boolean;
  description?: string;
  japanese?: string;
}

export const Avatars = ({
  videoSrc,
  name,
  player,
  description,
  japanese,
}: AvatarsProps) => {
  const { turns } = useScoreStore();
  const { videoUrl, loading } = useVideoUrl(videoSrc);
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        player && turns === 0 && "grayscale"
      } relative rounded-2xl shadow-lg overflow-hidden h-[20rem] w-[14rem] text-white flex flex-col p-2 justify-between`}
    >
      {videoUrl && !loading ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2Icon className="h-10 w-10 animate-spin" />
        </div>
      )}

      <div className="relative z-10">{player ? <PlayerHp /> : <BossHp />}</div>

      {!player && (
        <div className="space-y-4 flex items-end justify-between relative z-10">
          <div className="space-y-2">
            <p className="text-2xl font-semibold leading-none">{japanese}</p>
            <p className="">{description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};
