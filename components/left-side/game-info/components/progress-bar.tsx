import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { progress } = useScoreStore();
  const percentage = (progress / target) * 100;

  return (
    <div className="rounded-lg bg-white font-medium shadow-sm border border-black/15 overflow-hidden">
      <div className="relative h-8">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#efcb68] border rounded-l-lg border-black/15"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute top-0 right-0 h-full bg-white border-y border-r rounded-r-lg border-black/15"
          initial={{ width: "100%" }}
          animate={{ width: `${100 - percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute leading-none text-sm w-full h-full flex gap-1 items-center justify-center text-center z-10">
          <p>{progress}</p> <p className="text-sm">/</p> <p>{target}</p>
        </div>
      </div>
    </div>
  );
};
