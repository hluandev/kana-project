import { usePlayerStore } from "@/stores/usePlayerStore";
import { CurrentInfo } from "./components/current-info";
import PlayerLevel from "./components/player-level";
import { Score } from "./components/score";
import { ScoreDamage } from "./components/score-damage";
import { SwitchKana } from "./components/switch-kana";
import { Support } from "../support";
import { useEffect, useState } from "react";

export const GameInfo = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      const response = await fetch("/api/stripe/status");
      const { isSubscribed } = await response.json();
      setIsSubscribed(isSubscribed);
    };

    checkSubscription();
  }, []);

  return (
    <div className="flex flex-col  h-full justify-between">
      <div className="space-y-4">
        <SwitchKana />
        <Score />
        <ScoreDamage />
      </div>
      <div className="space-y-4">
        <CurrentInfo />
        <PlayerLevel />
        {isSubscribed === false && <Support />}
      </div>
    </div>
  );
};
