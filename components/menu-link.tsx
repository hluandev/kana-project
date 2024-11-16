import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

export const MenuLink = ({ text, href }: Props) => {
  return (
    <Link prefetch href={href}>
      {text}
    </Link>
  );
};
