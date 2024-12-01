import { Support } from "../support";
import { CurrentInfo } from "./components/current-info";
import PlayerLevel from "./components/player-level";
import { Score } from "./components/score";
import { ScoreDamage } from "./components/score-damage";
import { SwitchKana } from "./components/switch-kana";

export const GameInfo = () => {
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
      </div>

      <Support />
    </div>
  );
};
