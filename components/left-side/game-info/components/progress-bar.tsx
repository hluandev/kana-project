import { useScoreStore } from "@/stores/useScoreStore";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { score, multiplier } = useScoreStore();

  return (
    <div className="border rounded-lg border-neutral-800 text-center py-3">
      {score * multiplier} / {target}
    </div>
  );
};
