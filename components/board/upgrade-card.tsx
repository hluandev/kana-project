import { motion } from "framer-motion";

interface UpgradeCardProps {
  card: any;
  count: number;
}

export default function UpgradeCard({ card, count }: UpgradeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-black/15 w-36 shadow-sm p-2 rounded-lg"
    >
      <div>
        <div className="flex justify-between items-center">
          <p>
            <span>
              <span className="text-blue-600">
                +{card.reward_points * count}
              </span>{" "}
              /{" "}
              <span className="text-red-500">
                +{card.reward_multiplier * count}
              </span>{" "}
            </span>
          </p>
          {count > 1 && (
            <span className="text-sm bg-black/5 px-2 py-0.5 border border-black/15 shadow-sm rounded-md">
              x{count}
            </span>
          )}
        </div>
        <p className="text-sm text-black/50">{card.desc.slice(8)}</p>
      </div>
    </motion.div>
  );
}
