import Link from "next/link";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const LinkNav = ({ href, children, icon }: LinkNavProps) => {
  return (
    <Link prefetch={true} href={href} className="flex items-center gap-3">
      <p>{icon}</p>
      <p>{children}</p>
    </Link>
  );
};
