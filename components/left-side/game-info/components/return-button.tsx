import { Undo2Icon } from "lucide-react";
import Link from "next/link";

export const ReturnButton = () => {
  return (
    <Link
      prefetch={true}
      href={"/menu"}
      className="w-12 h-12  rounded-md flex items-center justify-center"
    >
      <Undo2Icon className="w-4 h-4" />
    </Link>
  );
};
