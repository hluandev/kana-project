import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { progress } = useScoreStore();
  const percentage = (progress / target) * 100;

  return (
    <div className="rounded-md bg-white font-medium shadow-sm border border-black/15 overflow-hidden">
      <div className="relative h-9">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#efcb68]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute leading-none w-full h-full flex gap-1 items-center justify-center text-center">
          <p>{progress}</p> <p className="text-[0.9rem]">/</p> <p>{target}</p>
        </div>
      </div>
    </div>
  );
};
