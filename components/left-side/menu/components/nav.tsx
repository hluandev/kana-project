import {
  ActivityIcon,
  BookIcon,
  Gamepad2Icon,
  PlayIcon,
  TrophyIcon,
} from "lucide-react";
import { LinkNav } from "./link-nav";

export const Nav = () => {
  return (
    <div className="flex flex-col">
      <LinkNav href="/menu/play">Play</LinkNav>
      <LinkNav href="/menu/docs">How to play</LinkNav>
      <LinkNav href="/menu/leaderboard">Leaderboard</LinkNav>
      <LinkNav href="/menu/activity">Activity</LinkNav>
    </div>
  );
};
