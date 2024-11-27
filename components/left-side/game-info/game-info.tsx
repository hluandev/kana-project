import { Support } from "../support";
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
      <div className="space-y-2">
        <CurrentInfo />
        {/* <Support /> */}
      </div>
    </div>
  );
};
