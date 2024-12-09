import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  blank?: boolean;
  onClick?: () => void;
}

export const LinkNav = ({ href, children, blank, onClick }: LinkNavProps) => {
  const pathname = usePathname();

  return (
    <Link
      onClick={onClick}
      prefetch={true}
      href={href}
      target={blank ? "_blank" : undefined}
      className={`flex hover:text-neutral-950 ${
        pathname === href ? "text-black" : "text-black/50"
      } font-medium text-sm duration-300 p-1 rounded-md items-center`}
    >
      <p>{children}</p>
    </Link>
  );
};
