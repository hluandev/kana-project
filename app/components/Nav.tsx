import { NavButton } from "./NavButton";

export const Nav = () => {
  return (
    <nav className="col-span-2 p-4">
      <div className="flex ">
        <img src="/img/JPDESU.svg" className="w-40" alt="" />
      </div>

      <div className="flex flex-col gap-4 text-xl font-black mt-9">
        <NavButton text="Tasks" active={false} />
        <NavButton text="Battle" active />
        <NavButton text="Guides" active={false} />
      </div>
    </nav>
  );
};
