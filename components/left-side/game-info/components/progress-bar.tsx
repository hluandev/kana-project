import { useScoreStore } from "@/stores/useScoreStore";

interface ProgressBarProps {
  target: number;
}

export const ProgressBar = ({ target }: ProgressBarProps) => {
  const { progress } = useScoreStore();

  return (
    <div className="border rounded-lg font-mono border-neutral-700 text-center py-3">
      {progress} / {target}
    </div>
  );
};
