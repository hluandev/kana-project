import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { progress } = useScoreStore();
  const percentage = Math.min((progress / target) * 100, 100);

  return (
    <div className="rounded-lg font-medium overflow-hidden">
      <div className="relative h-8">
        <motion.div
          className={`absolute ${
            percentage === 0 ? "hidden" : ""
          } top-0 left-0 h-full bg-[#efcb68] border rounded-l-lg shadow-sm border-black/10 ${
            percentage === 100 ? "rounded-r-lg" : ""
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className={`absolute top-0 right-0 h-full bg-white border-y border-r shadow-sm border-black/10 ${
            percentage === 0 ? "border-l rounded-lg" : "rounded-r-lg"
          } ${percentage >= 100 ? "hidden" : ""}`}
          initial={{ width: "100%" }}
          animate={{ width: `${100 - percentage}%` }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute leading-none  w-full h-full flex gap-1 items-center justify-center text-center z-10">
          <p>{progress}</p> <p className="">/</p> <p>{target}</p>
        </div>
      </div>
    </div>
  );
};
