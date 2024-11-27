import { Box } from "@/components/box";
import { ProgressBar } from "./progress-bar";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const Score = () => {
  const { kanaMissions } = useKanaStore();
  const { missionID } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <Box className="space-y-3 p-4 text-center">
      <div className="font-bold text-xl">
        Score {mission?.target} points to win
      </div>
      <ProgressBar target={mission?.target} />
    </Box>
  );
};
