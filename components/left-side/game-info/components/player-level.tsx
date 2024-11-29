import { usePlayerStore } from "@/stores/usePlayerStore";
import { motion } from "framer-motion";

export default function PlayerLevel() {
  const { info } = usePlayerStore();
  const percentage = (info.xp / 100) * 100;

  return (
    <div className="bg-white relative rounded-full overflow-hidden p-2 flex items-center gap-2">
      <div className="bg-[#1d1d1f] z-20 text-white font-medium text-xl rounded-full p-2 w-12 aspect-square flex justify-center items-center">
        {info.level}
      </div>

      <div className="z-10">
        <p className="text-xl font-medium">Ruan</p>
        <p className="text-sm">{info.xp}/100</p>
      </div>

      <motion.div
        className="bg-[#ffe65e] absolute left-0 h-full "
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
