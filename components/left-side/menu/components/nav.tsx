import { LinkNav } from "./link-nav";

export const Nav = () => {
  return (
    <div className="flex flex-col gap-3">
      <LinkNav href="/menu/play/kana">Play</LinkNav>
      <LinkNav href="/menu/play/kana">Leaderboard</LinkNav>
      <LinkNav href="/menu/play/kana">Tutorial</LinkNav>
      <LinkNav href="/menu/play/kana">Activity</LinkNav>
    </div>
  );
};
