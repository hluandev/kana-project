import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Screen = ({ children }: Props) => {
  return (
    <div className="col-span-10 h-full">
      <div className="border-b border-neutral-300 py-4 px-5 font-semibold bg-[#f3f3f3]">
        Anki
      </div>
      <div className="p-5 h-full">{children}</div>
    </div>
  );
};
