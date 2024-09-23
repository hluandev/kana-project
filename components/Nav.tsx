import { Swords, ListIcon, Diamond, ListCheck } from "lucide-react";
import { NavButton } from "./NavButton";

export const Nav = () => {
  return (
    <nav className="col-span-2 p-3 flex flex-col">
      <div className="w-fit bg-red-600 p-3">
        <img src="/img/logo.svg" className="h-5 " alt="" />
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-start mt-7">
          <NavButton
            text="Tasks"
            icon={<ListCheck className="" strokeWidth={1.6} size={18} />}
            selected={false}
          />
          <NavButton
            text="Anki"
            icon={<Diamond className="" strokeWidth={1.6} size={18} />}
            selected
          />
          {/* <NavButton
            text="Battle"
            icon={
              <Swords
                className="text-neutral-400"
                strokeWidth={1.6}
                size={18}
              />
            }
            selected={false}
          /> */}
        </div>

        <div className="bg-white rounded-lg border border-neutral-300 p-3">
          <div className="grid grid-cols-12 gap-2 items-center">
            <div className="bg-black rounded-lg flex items-center justify-center col-span-2 aspect-square">
              <div className="text-white leading-none text-lg font-bold">1</div>
            </div>
            <div className="col-span-10 leading-none space-y-1">
              <div className=" font-semibold">TheLoong</div>
              <p className="text-sm text-neutral-500 font-medium">#434215</p>
            </div>
          </div>

          <div className="mt-3">
            <div className="bg-[#f6f6f6] flex justify-center border border-neutral-300 h-7 items-center rounded-full">
              0/1000
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
