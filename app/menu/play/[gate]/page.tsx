"use client";

import { useState } from "react";
import CurrentPlayHand from "@/components/board/actions-hand/current-play-hand";
import { ShowMenuMobile } from "@/components/board/show-menu-mobile";
import { ShowUpgradeButton } from "@/components/board/show-upgrade-button";
import { SpecialHands } from "@/components/board/special-hand";
import { Tools } from "@/components/board/tools";
import { CurrentInfo } from "@/components/left-side/game-info/components/current-info";
import { Score } from "@/components/left-side/game-info/components/score";
import { ScoreDamage } from "@/components/left-side/game-info/components/score-damage";
import Warning from "@/components/warning";
import { useKanaStore } from "@/stores/useKanaStore";
import { Avatars } from "@/components/board/avatars";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { ProgressBar } from "@/components/left-side/game-info/components/progress-bar";

const Kana = () => {
  const { currentUpgrades } = useKanaStore();
  const { info } = usePlayerStore();
  const [showMobileTools, setShowMobileTools] = useState(false);
  const { turns } = useScoreStore();

  return (
    <div className="flex relative w-full flex-col items-center justify-between h-full">
      {/* Mobile */}
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

      <div className="absolute flex justify-between w-full left-0 px-20 top-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <Avatars player name={info.username} videoSrc="/video/player.mp4" />
          <div className="-right-56 top-1/2 -translate-y-1/2  z-50 absolute">
            <ScoreDamage />
          </div>
        </div>

        <Avatars name="Hiragana" videoSrc="/video/hiragana2.mp4" />
      </div>

      <div className="absolute w-full blur-3xl h-full pointer-events-none">
        {/* Left Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 w-1/2 h-full object-cover mix-blend-overlay pointer-events-none"
        >
          <source src={"/video/player.mp4"} type="video/mp4" />
        </video>

        {/* Right Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 w-1/2 h-full object-cover object-left mix-blend-overlay pointer-events-none"
        >
          <source src={"/video/hiragana2.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* Mobile Tools */}
      <div className={`fixed ${!showMobileTools && "max-lg:hidden"}`}>
        <Tools />
      </div>

      <div className="lg:hidden fixed bottom-1 left-1">
        <ShowMenuMobile
          onClick={() => setShowMobileTools(!showMobileTools)}
          isActive={showMobileTools}
        />
      </div>

      {currentUpgrades.length > 0 && (
        <div className="lg:hidden fixed bottom-1 right-1">
          <ShowUpgradeButton />
        </div>
      )}
    </div>
  );
};

export default Kana;
