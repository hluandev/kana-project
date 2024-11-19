"use client";

import { usePathname } from "next/navigation";

interface Props {
  profiles: any;
}

export const PlayerInfo = ({ profiles }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === `/menu/play/kana/${pathname.slice(16)}` ? (
        <div className="text-3xl bg-black/50 backdrop-blur-xl py-3 px-6 rounded-md font-bold">
          {profiles.first_time_kana === parseInt(pathname.slice(16))
            ? "Learning mode"
            : "Battle mode"}
        </div>
      ) : (
        <div className="relative">
          <div className="flex bg-white/20  backdrop-blur-xl  border">
            <div className=" h-14 aspect-square bg-white text-black flex justify-center text-2xl font-bold items-center">
              {profiles.level}
            </div>

            {/* Right */}
            <div className="flex flex-col">
              <div className="w-60 flex-1 pl-3 uppercase font-semibold flex items-center text-xl">
                {profiles.first_name}
              </div>
              <div className="bg-white/30  py-[2px] text-center text-sm leading-none">
                {profiles.exp} / 100
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
