import PlayerLevel from "../game-info/components/player-level";
import { Support } from "../support";
import { TopInfo } from "./components/top-info";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <TopInfo />

      <Support />
      <PlayerLevel />
    </div>
  );
};
