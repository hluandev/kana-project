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
import { useGameStateStore } from "@/stores/useGameStateStore";
import { useSettingStore } from "@/stores/useSettingStore";

const Kana = ({ params }: { params: { gate: string } }) => {
  const router = useRouter();
  const { currentUpgrades, setHiragana } = useKanaStore();
  const { info } = usePlayerStore();
  const [showMobileTools, setShowMobileTools] = useState(false);
  const [videoParams, setVideoParams] = useState<any>(null);
  const { loadGame } = useGameStateStore();
  const { showTools, setShowTools } = useSettingStore();

  useEffect(() => {
    const gateNumber = parseInt(params.gate.slice(4));
    if (gateNumber > (info.gate || 1)) {
      router.push("/menu/play");
    }

    useGameStateStore.getState().setCurrentGate(gateNumber);
    if (gateNumber === 1) {
      setHiragana(true);
    } else {
      setHiragana(false);
    }
    loadGame();
  }, [params.gate, info.gate]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const gateNumber = parseInt(params.gate.slice(4));
        if (isNaN(gateNumber) || gateNumber < 1 || gateNumber > 4) {
          router.push("/menu/play");
          return;
        }

        const videoParams = await fetchVideoParams(gateNumber.toString());
        if (!videoParams) {
          router.push("/menu/play");
          return;
        }

        setVideoParams(videoParams);
      } catch (error) {
        console.error("Error fetching video params:", error);
        router.push("/menu/play");
      }
    };

    fetchVideo();
  }, [params.gate, router]);

  return (
    <div className="flex relative max-lg:space-y-1 w-full flex-col items-center justify-between h-full">
      <SpecialHands />

      <Warning />

      <div className="lg:absolute flex justify-between max-lg:h-full w-full left-0 lg:px-4 px-2 lg:top-1/2 lg:-translate-y-1/2 z-[5]">
        <div className="relative">
          <Avatars
            player
            name={info.username}
            videoSrc={`${info.character}.mp4`}
          />
          <div className="absolute bottom-0 w-full lg:p-1">
            <ScoreDamage />
          </div>
        </div>

        <Avatars
          name={videoParams?.name}
          videoSrc={`${videoParams?.name}.mp4`}
          description={videoParams?.description}
          japanese={videoParams?.japanese}
        />
      </div>

      <CurrentPlayHand />

      <div className="absolute w-full blur-3xl h-full pointer-events-none">
        {/* Left Video */}
        <AvatarsBg videoSrc={`${info.character}.mp4`} left />

        {/* Right Video */}
        {videoParams?.name && (
          <AvatarsBg videoSrc={`${videoParams.name}.mp4`} left={false} />
        )}
      </div>

      {/* Mobile Tools */}
      <div className={`fixed ${!showMobileTools && "max-lg:hidden"}`}>
        <Tools />
      </div>

      <div className="lg:hidden z-[100] fixed bottom-1 left-1">
        <ShowMenuMobile
          onClick={() => {
            setShowMobileTools(!showMobileTools);
            setShowTools(!showTools);
          }}
          isActive={showMobileTools}
        />
      </div>

      {currentUpgrades.length > 0 && (
        <div className="lg:hidden fixed z-[100] bottom-1 right-1">
          <ShowUpgradeButton />
        </div>
      )}
    </div>
  );
};

export default Kana;
