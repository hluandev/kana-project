import { Box } from "@/components/box";
import { ProgressBar } from "./progress-bar";

export const Score = () => {
  return (
    <Box className="space-y-4 p-5 text-center">
      <div>Score 300 points to win</div>
      <ProgressBar />
    </Box>
  );
};
