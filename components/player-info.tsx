import Card from "./card";
import XpBar from "./xp-bar";
import Yen from "./yen";
export default function PlayerInfo() {
  return (
    <Card className="h-60 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-neutral-800 rounded-full"></div>
        <p className="text-2xl leading-none">Player</p>
      </div>

      <XpBar />

      <Yen />
    </Card>
  );
}
