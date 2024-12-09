import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const ScoreDamage = () => {
  const { score, multiplier, announcement } = useScoreStore();

  return (
    <Box className="flex flex-col lg:gap-1">
      <div className="flex flex-col gap-1">
        <div className="text-sm">
          {announcement === ""
            ? "Hand"
            : announcement
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>

        <div className="text-xl font-semibold max-lg:leading-none ">
          {score * multiplier}
        </div>
      </div>

      <div className="font-medium text-center grid lg:mt-2 mt-1 gap-2 grid-cols-2">
        <div className="py-1.5 bg-white shadow-sm border border-black/10 rounded-lg text-blue-600">
          {score}
        </div>
        <div className="py-1.5 bg-white shadow-sm border border-black/10 rounded-lg text-red-500">
          {multiplier}
        </div>
      </div>
    </Box>
  );
};
