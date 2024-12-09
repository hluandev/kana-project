"use client";

import CurrentPlayHand from "@/components/board/actions-hand/current-play-hand";
import { ShowUpgradeButton } from "@/components/board/show-upgrade-button";
import { SpecialHands } from "@/components/board/special-hand";
import { Tools } from "@/components/board/tools";
import { CurrentInfo } from "@/components/left-side/game-info/components/current-info";
import { ReturnButton } from "@/components/left-side/game-info/components/return-button";
import { Score } from "@/components/left-side/game-info/components/score";
import { ScoreDamage } from "@/components/left-side/game-info/components/score-damage";
import Warning from "@/components/warning";
import { useKanaStore } from "@/stores/useKanaStore";

const Kana = () => {
  const { currentUpgrades } = useKanaStore();

  return (
    <div className="flex relative flex-col items-center justify-between h-full">
      <div className="lg:hidden flex flex-col items-center gap-2">
        <div className="grid grid-cols-3 text-xs gap-1">
          <Score />
          <ScoreDamage />
          <CurrentInfo />
        </div>

        <div className="lg:hidden">
          <SpecialHands />
        </div>
      </div>

      <div className="max-lg:hidden">
        <SpecialHands />
      </div>

      <Warning />

      <CurrentPlayHand />

      <Tools />

      <div className="lg:hidden fixed bottom-2.5 left-2">
        <ReturnButton />
      </div>

      {currentUpgrades.length > 0 && (
        <div className="lg:hidden fixed bottom-2 right-2">
          <ShowUpgradeButton />
        </div>
      )}
    </div>
  );
};

export default Kana;
