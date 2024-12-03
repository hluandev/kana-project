import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { InfoBox } from "./infoBox";

export const CurrentInfo = () => {
  const { turns, discard, missionID, yen, isEndlessMode } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  return (
    <div className="rounded-2xl flex flex-col p-4 bg-black/5 bg-opacity-10 border border-black/15 shadow-inner gap-2">
      {/* Turns */}
      <InfoBox title="Turns">{turns}</InfoBox>

      {/* Discard */}
      <InfoBox title="Discard">{discard}</InfoBox>

      {/* Matches */}
      <InfoBox title="Matches">
        {isEndlessMode ? missionID : `${missionID} / ${kanaMissions.length}`}
      </InfoBox>

      {/* Money */}
      <InfoBox title="Money">¥{yen}</InfoBox>
    </div>
  );
};
