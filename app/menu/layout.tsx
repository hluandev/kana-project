import { MenuTop } from "@/components/menu-top";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full bg-[url('/img/bg-menu.png')] bg-cover">
      <MenuTop />
      {children}
    </section>
  );
}
