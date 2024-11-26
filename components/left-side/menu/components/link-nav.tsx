import Link from "next/link";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
}

export const LinkNav = ({ href, children }: LinkNavProps) => {
  return (
    <Link prefetch={true} href={href}>
      {children}
    </Link>
  );
};
