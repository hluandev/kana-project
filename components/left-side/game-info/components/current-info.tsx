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
    <Box className="p-4 grid grid-cols-2 gap-2 grid-rows-2 overflow-hidden">
      {/* Discard */}
      <InfoBox>{discard}</InfoBox>

      {/* Turns */}
      <InfoBox>{turns}</InfoBox>

      {/* Matches */}
      <InfoBox>
        {missionID} / {kanaMissions.length}
      </InfoBox>

      {/* Money */}
      <InfoBox>¥{yen}</InfoBox>
    </Box>
  );
};
