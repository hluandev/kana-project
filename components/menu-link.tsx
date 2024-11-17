import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

export const MenuLink = ({ text, href }: Props) => {
  return (
    <Link className="hover:text-pink-500" prefetch href={href}>
      {text}
    </Link>
  );
};
