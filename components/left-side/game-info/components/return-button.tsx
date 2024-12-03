import { Undo2Icon } from "lucide-react";
import Link from "next/link";

export const ReturnButton = () => {
  return (
    <Link
      prefetch={true}
      href={"/menu"}
      className="pr-3 flex items-center justify-center"
    >
      <Undo2Icon className="w-4 h-4" />
    </Link>
  );
};
