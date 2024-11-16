import { MenuTop } from "@/components/menu-top";

export default function MenuLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <MenuTop />
      {children}
    </section>
  );
}
