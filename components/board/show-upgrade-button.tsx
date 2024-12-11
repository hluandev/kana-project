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
        showUpgrades ? "bg-black text-white" : "bg-white text-black"
      } border   h-8 w-8 flex items-center justify-center rounded-xl transition-colors`}
    >
      <CircleFadingArrowUp strokeWidth={1.7} className="w-5 h-5" />
    </button>
  );
};
