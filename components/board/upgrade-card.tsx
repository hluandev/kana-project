import { motion } from "framer-motion";

interface UpgradeCardProps {
  card: any;
  count: number;
  isActive?: boolean;
}

export default function UpgradeCard({
  card,
  count,
  isActive,
}: UpgradeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        isActive
          ? "[background:linear-gradient(45deg,#fff,theme(colors.white)_50%,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.red.600/.48)_0%,theme(colors.red.500)_20%,theme(colors.indigo.300)_40%,theme(colors.indigo.500)_60%,theme(colors.slate.600/.48)_100%)_border-box] rounded-xl border-2 border-transparent animate-border"
          : "border-white"
      } relative text-xs lg: w-28 border-2 bg-black/5 lg:w-36  lg:p-2 p-1 rounded-lg`}
    >
      <div>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-blue-600">+{card.reward_points * count}</span>{" "}
            /{" "}
            <span className="text-red-500">
              +{card.reward_multiplier * count}
            </span>{" "}
          </p>
          {count > 1 && (
            <span className=" absolute right-2 lg:top-2 max-lg:top-1/2 max-lg:-translate-y-1/2 bg-black/5 px-1 py-0.5 border   rounded-md">
              x{count}
            </span>
          )}
        </div>
        <p className=" text-black/50">
          {card.desc
            .slice(8)
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </div>
    </motion.div>
  );
}
