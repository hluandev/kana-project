import { LinkNav } from "./link-nav";

export const Nav = () => {
  return (
    <div className="flex flex-col gap-3 text-xl font-medium">
      <LinkNav href="/menu/play">Play</LinkNav>
      <LinkNav href="/menu/play/kana">How to play</LinkNav>
      <LinkNav href="/menu/leaderboard">Leaderboard</LinkNav>
      <LinkNav href="/menu/activity">Activity</LinkNav>
    </div>
  );
};
