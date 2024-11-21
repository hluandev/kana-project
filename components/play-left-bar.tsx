import PlayerInfo from "./player-info";
import Score from "./score";

export default function PlayLeftBar() {
  return (
    <div className="flex flex-col h-full justify-between">
      <Score />
      <PlayerInfo />
    </div>
  );
}
