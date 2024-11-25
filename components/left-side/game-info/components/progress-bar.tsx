import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { progress } = useScoreStore();
  const percentage = (progress / target) * 100;

  return (
    <div className="border rounded-lg font-mono border-neutral-700 overflow-hidden">
      <div className="relative h-10">
        <motion.div
          className="absolute top-0 left-0 h-full bg-yellow-600"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute w-full h-full flex items-center justify-center text-center">
          {progress} / {target}
        </div>
      </div>
    </div>
  );
};
