import { Undo2Icon } from "lucide-react";
import Link from "next/link";

export const ReturnButton = () => {
  return (
    <Link
      prefetch={true}
      href={"/menu"}
      className="lg:pr-3 flex items-center justify-center bg-white rounded-xl border text-xs lg: border-black/10 shadow-sm  lg:h-11 lg:w-11 h-8 w-8"
    >
      <Undo2Icon strokeWidth={1.7} className="w-4 h-4" />
    </Link>
  );
};
