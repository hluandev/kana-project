import { Globe, UserRound } from "lucide-react";

export const Connect = () => {
  return (
    <div className="col-span-2 p-3 ">
      <div className="h-full   font-black  rounded-2xl border-white bg-[#161716] shadow-inner-shadow-dark-float">
        <div className="grid grid-cols-2 text-2xl border-b border-neutral-800">
          <div className="p-5 flex items-center justify-center border-r border-neutral-800">
            <UserRound className="" strokeWidth={2} size={32} />
          </div>
          <div className="p-5 flex items-center justify-center">
            <Globe strokeWidth={2} size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};
