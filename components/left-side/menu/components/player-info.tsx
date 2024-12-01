import { Box } from "@/components/box";
import { usePlayerStore } from "@/stores/usePlayerStore";

export const PlayerInfo = () => {
  const { info } = usePlayerStore();

  return (
    <Box className="p-4">
      <p>{info.name}</p>
      <p>{info.level}</p>
    </Box>
  );
};
