import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="p-2 flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="font-medium">
          {announcement === ""
            ? "Hand"
            : announcement
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>

        <div className="text-lg font-semibold">{score * multiplier}</div>
      </div>

      <div className="font-semibold text-center grid mt-4 gap-4 grid-cols-2">
        <div className="py-2 bg-[#50d0d2] bg-opacity-10 shadow-sm border border-black/15 rounded-md text-[#50d0d2]">
          {score}
        </div>
        <div className="py-2 bg-white bg-red-500/10 shadow-sm border border-black/15 rounded-md text-red-500">
          {multiplier}
        </div>
      </div>
    </Box>
  );
};
