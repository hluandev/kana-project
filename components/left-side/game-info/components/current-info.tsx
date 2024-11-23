import { Box } from "@/components/box";
import { useScoreStore } from "@/stores/useScoreStore";

export const CurrentInfo = () => {
  const { turns, discard } = useScoreStore();

  return (
    <Box className="p-0 grid grid-cols-2 grid-rows-2 overflow-hidden">
      {/* Turns */}
      <div className="border-b text-center border-r border-[#414447] py-6">
        {turns}
      </div>

      {/* Discard */}
      <div className="border-b text-center border-[#414447] py-6">
        {discard}
      </div>

      {/* Matches */}
      <div className="border-r text-center border-[#414447] py-6">0 / 5</div>

      {/* Money */}
      <div className="text-center py-6 text-yellow-500">¥100</div>
    </Box>
  );
};
