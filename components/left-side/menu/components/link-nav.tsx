import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  blank?: boolean;
  onClick?: () => void;
}

export const LinkNav = ({ href, children, blank, onClick, icon }: LinkNavProps) => {
  const pathname = usePathname();

  return (
    <Link
      onClick={onClick}
      prefetch={true}
      href={href}
      target={blank ? "_blank" : undefined}
      className={`flex gap-2 hover:text-neutral-950 w-fit rounded-full ${
        pathname === href ? "bg-black/20 " : ""
      } font-medium  duration-300 px-2.5 py-1 items-center`}
    >
      <div>{icon}</div>
      <p>{children}</p>
    </Link>
  );
};
