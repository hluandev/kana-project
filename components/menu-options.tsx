import { MenuLink } from "./menu-link";

export const MenuOptions = () => {
  return (
    <div className="fixed top-1/2 uppercase -translate-y-1/2 ml-12 flex flex-col gap-5 text-5xl font-bold">
      <MenuLink href="menu/play" text="Play" />
      <MenuLink href="/tutorial" text="Tutorial" />
      <MenuLink href="/leaderboard" text="Leaderboard" />
      <MenuLink href="/" text="Setting" />
      <MenuLink href="/social" text="Social" />
    </div>
  );
};
