import { Box } from "@/components/box";

export const CurrentInfo = () => {
  return (
    <Box className="p-0 grid grid-cols-2 grid-rows-2 overflow-hidden">
      <div className="border-b text-center border-r border-[#414447] py-6">
        4
      </div>
      <div className="border-b text-center border-[#414447] py-6">4</div>
      <div className="border-r text-center border-[#414447] py-6">0 / 5</div>
      <div className="text-center py-6 text-yellow-500">¥100</div>
    </Box>
  );
};
