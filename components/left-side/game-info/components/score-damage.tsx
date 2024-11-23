import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier } = useScoreStore();

  return (
    <Box className="p-0 text-center">
      <div className="py-6">{score * multiplier}</div>

      <div className="border-t border-[#414447] grid grid-cols-2">
        <div className="border-r border-[#414447] py-5">{score}</div>
        <div className="py-5">{multiplier}</div>
      </div>
    </Box>
  );
};
