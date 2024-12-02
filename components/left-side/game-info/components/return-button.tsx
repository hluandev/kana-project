import { Undo2Icon } from "lucide-react";
import Link from "next/link";

export const ReturnButton = () => {
  return (
    <Link
      prefetch={true}
      href={"/"}
      className="w-14 h-14 bg-white rounded-full flex items-center justify-center"
    >
      <Undo2Icon />
    </Link>
  );
};
