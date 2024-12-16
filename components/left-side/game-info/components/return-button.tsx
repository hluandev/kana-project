import { Undo2Icon } from "lucide-react";
import Link from "next/link";

export const ReturnButton = () => {
  return (
    <Link
      prefetch={true}
      href={"/menu"}
      className=" flex items-center justify-center bg-black/80 backdrop-blur-xl rounded-xl text-xs lg:h-10 lg:w-10 h-8 w-8"
    >
      <Undo2Icon strokeWidth={1.7} className="w-5 h-5" />
    </Link>
  );
};
