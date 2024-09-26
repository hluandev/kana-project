import { Link } from "@remix-run/react";
import { Diamond } from "lucide-react";

interface Props {
  text: string;
  active: boolean;
}

export const NavButton = ({ text, active }: Props) => {
  return (
    <Link
      className={`flex items-center gap-2.5 ${
        active
          ? "border-white bg-[#161716] shadow-inner-shadow-dark-float"
          : "text-neutral-600"
      } rounded-xl  tracking-wide  p-4 `}
      to={"/"}
    >
      <Diamond strokeWidth={3} className={`${active && "text-lime-400"}`} />
      <p>{text}</p>
    </Link>
  );
};
