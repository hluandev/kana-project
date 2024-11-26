import { Box } from "@/components/box";
import { ProgressBar } from "./progress-bar";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const Score = () => {
  const { kanaMissions } = useKanaStore();
  const { missionID } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <Box className="space-y-2.5 p-3 text-center bg-[#fbfaf9]">
      <div className="">Score {mission?.target} points to win</div>
      <ProgressBar target={mission?.target} />
    </Box>
  );
};
