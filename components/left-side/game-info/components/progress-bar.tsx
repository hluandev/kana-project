import { useScoreStore } from "@/stores/useScoreStore";

export const ProgressBar = () => {
  const { score, multiplier } = useScoreStore();

  return (
    <div className="border rounded-lg border-[#414447] text-center py-3">
      {score * multiplier} / 300
    </div>
  );
};
