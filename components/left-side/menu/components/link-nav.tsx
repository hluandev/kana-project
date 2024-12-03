import Link from "next/link";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const LinkNav = ({ href, children, icon }: LinkNavProps) => {
  return (
    <Link
      prefetch={true}
      href={href}
      className="flex hover:bg-[#50d0d2]  duration-300 p-1 rounded-md items-center gap-2.5"
    >
      <p>{icon}</p>
      <p>{children}</p>
    </Link>
  );
};
