import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="p-0 text-center">
      <div className="h-20 text-2xl font-bold flex items-center justify-center uppercase">
        {announcement}
      </div>

      <div className="py-6 font-mono border-t border-neutral-800">
        {score * multiplier}
      </div>

      <div className="border-t border-neutral-800 font-mono grid grid-cols-2">
        <div className="border-r border-neutral-800 py-5">{score}</div>
        <div className="py-5">{multiplier}</div>
      </div>
    </Box>
  );
};
