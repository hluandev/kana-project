import { Box } from "@/components/box";
import { ProgressBar } from "./progress-bar";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const Score = () => {
  const { kanaMissions } = useKanaStore();
  const { missionID } = useScoreStore();

  const mission = kanaMissions.find((mission) => mission.id === missionID);

  return (
    <Box className="space-y-2.5 p-4">
      <div className="text-neutral-400  font-medium ">
        Score at least {mission?.target} points to clear this round.
      </div>
      <ProgressBar target={mission?.target} />
    </Box>
  );
};
