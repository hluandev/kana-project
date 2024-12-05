import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const LinkNav = ({ href, children, icon }: LinkNavProps) => {
  const pathname = usePathname();

  return (
    <Link
      prefetch={true}
      href={href}
      className="flex hover:text-neutral-950 text-black/60 font-medium text-[0.9rem] duration-300 p-1 rounded-md items-center "
    >
      <p>{children}</p>
    </Link>
  );
};
