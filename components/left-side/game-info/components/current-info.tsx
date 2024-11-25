import { Box } from "@/components/box";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const CurrentInfo = () => {
  const { turns, discard, missionID, yen } = useScoreStore();
  const { kanaMissions, currentSpecial } = useKanaStore();

  const turnValue = currentSpecial.reduce((total, special) => {
    if (special.condition === "life" && special.combo === "turn") {
      return total + special.reward;
    }
    return total;
  }, 0);

  const discardValue = currentSpecial.reduce((total, special) => {
    if (special.condition === "life" && special.combo === "discard") {
      return total + special.reward;
    }
    return total;
  }, 0);

  return (
    <Box className="p-0 font-mono grid grid-cols-2 grid-rows-2 overflow-hidden">
      {/* Discard */}
      <div className="border-b text-center bg-red-600/5 text-red-400 border-r border-neutral-700 py-8">
        {discard + discardValue}
      </div>

      {/* Turns */}
      <div className="border-b text-center bg-blue-600/5 text-blue-400 border-neutral-700 py-8">
        {turns + turnValue}
      </div>

      {/* Matches */}
      <div className="border-r text-center border-neutral-700 py-8">
        {missionID} / {kanaMissions.length}
      </div>

      {/* Money */}
      <div className="text-center py-8 text-yellow-500">¥{yen}</div>
    </Box>
  );
};
