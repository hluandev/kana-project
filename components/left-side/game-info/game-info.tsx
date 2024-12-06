import { motion } from "framer-motion";
import { Support } from "../support";
import { CurrentInfo } from "./components/current-info";
import PlayerLevel from "./components/player-level";
import { ReturnButton } from "./components/return-button";
import { Score } from "./components/score";
import { ScoreDamage } from "./components/score-damage";
import { SwitchKana } from "./components/switch-kana";

export const GameInfo = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-3">
        <div className="flex gap-1 w-full">
          <ReturnButton />
          <SwitchKana />
        </div>
        <Score />
        <ScoreDamage />
      </div>
      <div className="space-y-3">
        <CurrentInfo />
        <PlayerLevel />
      </div>
    </div>
  );
};
