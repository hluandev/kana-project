import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="p-0 text-center">
      <div className="h-20 text-2xl font-bold flex items-center justify-center uppercase">
        {announcement}
      </div>

      <div className="py-6 border-t border-neutral-300">
        {score * multiplier}
      </div>

      <div className="border-t border-neutral-300  grid grid-cols-2">
        <div className="border-r border-neutral-300 py-5">{score}</div>
        <div className="py-5">{multiplier}</div>
      </div>
    </Box>
  );
};
