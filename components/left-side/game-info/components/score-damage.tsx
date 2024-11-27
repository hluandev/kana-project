import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="p-4 text-center">
      <div className="h-20 text-2xl font-bold flex items-center justify-center uppercase">
        {announcement.replace(/_/g, " ")}
      </div>

      <div className="py-3 bg-[#f2f3f7] rounded-lg font-semibold text-lg">
        {score * multiplier}
      </div>

      <div className="font-semibold text-lg grid mt-2 gap-2 grid-cols-2">
        <div className="py-2 bg-[#f2f3f7] rounded-lg">{score}</div>
        <div className="py-2 bg-[#f2f3f7] rounded-lg">{multiplier}</div>
      </div>
    </Box>
  );
};
