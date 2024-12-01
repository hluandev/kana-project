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
    <div className="flex flex-col gap-6 text-xl font-medium">
      <LinkNav icon={<Gamepad2Icon size={20} />} href="/menu/play">
        Play
      </LinkNav>
      <LinkNav icon={<BookIcon size={20} />} href="/menu/docs">
        How to play
      </LinkNav>
      <LinkNav icon={<TrophyIcon size={20} />} href="/menu/leaderboard">
        Leaderboard
      </LinkNav>
      <LinkNav icon={<ActivityIcon size={20} />} href="/menu/activity">
        Activity
      </LinkNav>
    </div>
  );
};
