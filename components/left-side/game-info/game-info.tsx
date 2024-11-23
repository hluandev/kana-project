import { CurrentInfo } from "./components/current-info";
import { Score } from "./components/score";
import { ScoreDamage } from "./components/score-damage";

export const GameInfo = () => {
  return (
    <div className="flex flex-col  h-full justify-between">
      <div className="space-y-4">
        <Score />
        <ScoreDamage />
      </div>
      <CurrentInfo />
    </div>
  );
};
