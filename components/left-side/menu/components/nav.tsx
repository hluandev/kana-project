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
      <LinkNav icon={<Gamepad2Icon size={14} />} href="/menu/play">
        Play
      </LinkNav>
      <LinkNav icon={<BookIcon size={14} />} href="/menu/docs">
        How to play
      </LinkNav>
      <LinkNav icon={<TrophyIcon size={14} />} href="/menu/leaderboard">
        Leaderboard
      </LinkNav>
      <LinkNav icon={<ActivityIcon size={14} />} href="/menu/activity">
        Activity
      </LinkNav>
    </div>
  );
};
