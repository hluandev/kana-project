import { Box } from "@/components/box";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";

export const CurrentInfo = () => {
  const { turns, discard, missionID, yen, addTurns, addDiscard } =
    useScoreStore();
  const { kanaMissions, currentSpecial } = useKanaStore();

  useEffect(() => {
    // Reset any previous bonuses
    let totalTurnBonus = 0;
    let totalDiscardBonus = 0;

    // Calculate new bonuses
    currentSpecial.forEach((special) => {
      if (special.condition === "life") {
        if (special.combo === "turn") {
          totalTurnBonus += special.reward;
        } else if (special.combo === "discard") {
          totalDiscardBonus += special.reward;
        }
      }
    });

    // Apply the bonuses if they exist
    if (totalTurnBonus !== 0) {
      addTurns(totalTurnBonus);
    }
    if (totalDiscardBonus !== 0) {
      addDiscard(totalDiscardBonus);
    }
  }, [currentSpecial]);

  return (
    <Box className="p-0 font-mono grid grid-cols-2 grid-rows-2 overflow-hidden">
      {/* Discard */}
      <div className="border-b text-center bg-red-600/80 text-red-100 border-r  py-8">
        {discard}
      </div>

      {/* Turns */}
      <div className="border-b text-center bg-blue-600/80 text-blue-100  py-8">
        {turns}
      </div>

      {/* Matches */}
      <div className="border-r text-center  py-8">
        {missionID} / {kanaMissions.length}
      </div>

      {/* Money */}
      <div className="text-center py-8 text-yellow-500">¥{yen}</div>
    </Box>
  );
};
