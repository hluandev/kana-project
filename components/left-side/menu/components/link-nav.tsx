import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  blank?: boolean;
  onClick?: () => void;
}

export const LinkNav = ({
  href,
  children,
  blank,
  onClick,
  icon,
}: LinkNavProps) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  return (
    <Link
      onClick={onClick}
      prefetch={true}
      href={href}
      target={blank ? "_blank" : undefined}
      className={`flex  max-lg:text-xs hover:text-white/60 max-lg:px-1 w-fit rounded-full ${
        pathname === href ? "bg-white/20 " : ""
      } font-medium  duration-300 ${
        isMobile ? "py-1 gap-0.5" : "px-2.5 py-1 gap-2"
      } items-center`}
    >
      <div>{icon}</div>
      <p>{children}</p>
    </Link>
  );
};
