import { Box } from "@/components/box";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const CurrentInfo = () => {
  const { turns, discard, missionID } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  return (
    <Box className="p-0 grid grid-cols-2 grid-rows-2 overflow-hidden">
      {/* Turns */}
      <div className="border-b text-center border-r border-neutral-800 py-8">
        {turns}
      </div>

      {/* Discard */}
      <div className="border-b text-center border-neutral-800 py-8">
        {discard}
      </div>

      {/* Matches */}
      <div className="border-r text-center border-neutral-800 py-8">
        {missionID} / {kanaMissions.length}
      </div>

      {/* Money */}
      <div className="text-center py-8 text-yellow-500">¥100</div>
    </Box>
  );
};
