import { MenuLink } from "./menu-link";

export const MenuOptions = () => {
  return (
    <div className="fixed top-1/2 uppercase -translate-y-1/2 ml-12 flex flex-col gap-5 text-5xl font-bold">
      <MenuLink href="/play" text="Play" />
      <MenuLink href="/play" text="Leaderboard" />
      <MenuLink href="/play" text="Setting" />
      <MenuLink href="/play" text="Social" />
    </div>
  );
};
