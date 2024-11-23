import { useScoreStore } from "@/stores/useScoreStore";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { score, multiplier } = useScoreStore();

  return (
    <div className="border rounded-lg border-[#414447] text-center py-3">
      {score * multiplier} / {target}
    </div>
  );
};
