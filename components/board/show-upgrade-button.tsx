import { CircleFadingArrowUp } from "lucide-react";
import { useKanaStore } from "@/stores/useKanaStore";
import { useIsMobile } from "@/hooks/useIsMobile";

export const ShowUpgradeButton = () => {
  const isMobile = useIsMobile();
  const { showUpgrades, setShowUpgrades } = useKanaStore();

  if (!isMobile) return null;

  return (
    <button
      onClick={() => setShowUpgrades(!showUpgrades)}
      className={`${
        showUpgrades ? "bg-black/10" : "bg-white"
      } border border-black/10 shadow-sm h-8 w-8 flex items-center justify-center rounded-lg transition-colors`}
    >
      <CircleFadingArrowUp className="w-5 h-5" />
    </button>
  );
};
