import { Box } from "../box";
import { SubscriptionButton } from "../subscription-button";

export const Support = () => {
  return (
    <Box className="text-black italic text-center">
      <div className="p-4 space-y-4">
        <p className="text-sm">
          Upgrade to support this project and gain early access to Stage 2 as
          soon as it becomes available.
        </p>
        <SubscriptionButton />
      </div>
    </Box>
  );
};
