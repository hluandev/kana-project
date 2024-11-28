import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-3 ">
        <div className="font-medium">
          {announcement === ""
            ? "Hand"
            : announcement
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>

        <div className="text-4xl font-semibold">{score * multiplier}</div>
      </div>

      <div className="font-semibold text-lg text-center grid mt-4 gap-4 grid-cols-2">
        <div className="py-2 bg-[#f2f3f7] rounded-full text-[#01de5b]">
          {score}
        </div>
        <div className="py-2 bg-[#f2f3f7] rounded-full text-[#4961ff]">
          {multiplier}
        </div>
      </div>
    </Box>
  );
};
