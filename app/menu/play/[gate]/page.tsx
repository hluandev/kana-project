"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import AvatarsBg from "@/components/board/avatars-bg";
import { fetchVideoParams } from "@/actions/server/use-server/fetch-video-params";

const Kana = ({ params }: { params: { gate: string } }) => {
  const router = useRouter();
  const { currentUpgrades } = useKanaStore();
  const { info } = usePlayerStore();
  const [showMobileTools, setShowMobileTools] = useState(false);
  const [videoParams, setVideoParams] = useState<any>(null);

  console.log(params.gate.slice(4));

  useEffect(() => {
    const gateNumber = parseInt(params.gate.slice(4));
    if (gateNumber > (info.gate || 1)) {
      router.push("/menu/play");
    }
  }, [params.gate, info.gate]);

  useEffect(() => {
    const fetchVideo = async () => {
      const videoParams = await fetchVideoParams(params.gate.slice(4));
      setVideoParams(videoParams);
    };

    fetchVideo();
  }, [params.gate]);

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

      <div className="absolute flex justify-between w-full left-0 px-20 top-1/2 -translate-y-1/2 z-[5]">
        <div className="relative">
          <Avatars player name={info.username} videoSrc="player.mp4" />
          <div className="absolute bottom-0 w-full p-2">
            <ScoreDamage />
          </div>
        </div>

        <Avatars
          name={videoParams?.name}
          videoSrc={`${videoParams?.name}.mp4`}
        />
      </div>

      <div className="absolute w-full blur-3xl h-full pointer-events-none">
        {/* Left Video */}
        <AvatarsBg videoSrc="player.mp4" left />

        {/* Right Video */}
        {videoParams?.name && (
          <AvatarsBg videoSrc={`${videoParams.name}.mp4`} left={false} />
        )}
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
