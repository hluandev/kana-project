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
    <div className="rounded-2xl flex flex-col p-4 bg-[#50d0d2] bg-opacity-10 border border-black/15 shadow-inner gap-2">
      {/* Turns */}
      <InfoBox title="Turns">{turns}</InfoBox>

      {/* Discard */}
      <InfoBox title="Discard">{discard}</InfoBox>

      {/* Matches */}
      <InfoBox title="Matches">
        {missionID} / {kanaMissions.length}
      </InfoBox>

      {/* Money */}
      <InfoBox title="Money">¥{yen}</InfoBox>
    </div>
  );
};
