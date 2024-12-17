import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";

export const BossHp = () => {
  const bossHp = useScoreStore((state) => state.bossHp);
  const percentage = Math.min((bossHp / 33900) * 100, 100);
  return (
    <div className="bg-black/50 relative backdrop-blur-xl rounded-full lg:p-1 p-0.5 text-center">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5 }}
        className="bg-red-600  rounded-full lg:h-7 h-5 font-medium text-base  w-full"
      >
        <p className="absolute text-xs top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white">
          {bossHp}
        </p>
      </motion.div>
    </div>
  );
};
