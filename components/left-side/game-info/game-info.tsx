import { CurrentInfo } from "./components/current-info";
import PlayerLevel from "./components/player-level";
import { ReturnButton } from "./components/return-button";
import { Score } from "./components/score";
import { ScoreDamage } from "./components/score-damage";
import { SwitchKana } from "./components/switch-kana";

export const GameInfo = () => {
  return (
    <div className="flex flex-col text-xs lg:text-sm h-full justify-between">
      <div className="lg:space-y-2 space-y-1">
        <div className="flex gap-1 w-full">
          <ReturnButton />
          <SwitchKana />
        </div>
        <Score />
        <ScoreDamage />
      </div>
      <div className="lg:space-y-2 space-y-1">
        <CurrentInfo />
        <PlayerLevel />
      </div>
    </div>
  );
};
