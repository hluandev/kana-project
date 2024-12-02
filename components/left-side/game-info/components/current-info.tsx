import { Box } from "@/components/box";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { InfoBox } from "./infoBox";

export const CurrentInfo = () => {
  const { turns, discard, missionID, yen, addTurns, addDiscard } =
    useScoreStore();
  const { kanaMissions, currentSpecial } = useKanaStore();

  return (
    <div className="grid rounded-2xl grid-cols-2 gap-4 grid-rows-2 overflow-hidden">
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
    </div>
  );
};
