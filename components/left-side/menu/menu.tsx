import { PlayerInfo } from "./components/player-info";
import { TopInfo } from "./components/top-info";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <TopInfo />
      <PlayerInfo />
    </div>
  );
};
