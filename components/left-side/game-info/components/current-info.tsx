import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { InfoBox } from "./infoBox";

export const CurrentInfo = () => {
  const { turns, discard, missionID, yen, isEndlessMode } = useScoreStore();
  const { kanaMissions } = useKanaStore();

  return (
    <div className="rounded-xl grid grid-cols-2 grid-rows-2 p-1 lg:p-2 bg-[#fafafa] border border-black/10 shadow-sm gap-1 lg:gap-2">
      {/* Turns */}
      <InfoBox title="Turns">{turns}</InfoBox>

      {/* Discard */}
      <InfoBox title="Discards">{discard}</InfoBox>

      {/* Matches */}
      <InfoBox title="Round">
        {isEndlessMode ? missionID : `${missionID} / ${kanaMissions.length}`}
      </InfoBox>

      {/* Money */}
      <InfoBox title="Money">¥{yen}</InfoBox>
    </div>
  );
};
