import { Box } from "@/components/box";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { InfoBox } from "./infoBox";

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
    <Box className="p-0 bg-transparent grid grid-cols-2 gap-4 grid-rows-2 overflow-hidden">
      {/* Discard */}
      <InfoBox title="Discard">{discard}</InfoBox>

      {/* Turns */}
      <InfoBox title="Turns">{turns}</InfoBox>

      {/* Matches */}
      <InfoBox title="Matches">
        {missionID} / {kanaMissions.length}
      </InfoBox>

      {/* Money */}
      <InfoBox title="Money">¥{yen}</InfoBox>
    </Box>
  );
};
