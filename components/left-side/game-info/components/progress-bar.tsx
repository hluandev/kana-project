import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { progress } = useScoreStore();
  const percentage = (progress / target) * 100;

  return (
    <div className="rounded-lg font-semibold text-lg bg-[#f2f3f7] overflow-hidden">
      <div className="relative h-10">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#ffe65e]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute leading-none w-full h-full flex gap-1 items-center justify-center text-center">
          <p>{progress}</p> <p className="text-sm">/</p> <p>{target}</p>
        </div>
      </div>
    </div>
  );
};
