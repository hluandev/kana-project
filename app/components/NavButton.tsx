import { Link } from "@remix-run/react";

interface Props {
  text: string;
  active: boolean;
}

export const NavButton = ({ text, active }: Props) => {
  return (
    <Link
      className={`${
        active && "border-white bg-[#161716] shadow-inner-shadow-dark-float"
      } rounded-xl  tracking-wide  p-4 `}
      to={"/"}
    >
      {text}
    </Link>
  );
};
