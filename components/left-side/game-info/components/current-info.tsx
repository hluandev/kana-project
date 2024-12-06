import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { InfoBox } from "./infoBox";

export const CurrentInfo = () => {
  const { turns, discard, missionID, yen, isEndlessMode } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  return (
    <div className="rounded-2xl grid grid-cols-2 grid-rows-2 p-2 bg-[#fafafa] border border-black/15 shadow-sm gap-2">
      {/* Turns */}
      <InfoBox title="Turns">{turns}</InfoBox>

      {/* Discard */}
      <InfoBox title="Discard">{discard}</InfoBox>

      {/* Matches */}
      <InfoBox title="Round">
        {isEndlessMode ? missionID : `${missionID} / ${kanaMissions.length}`}
      </InfoBox>

      {/* Money */}
      <InfoBox title="Money">¥{yen}</InfoBox>
    </div>
  );
};
