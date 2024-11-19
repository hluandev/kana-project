import { AmbientSound } from "@/components/ambient-sound";
import { MenuTop } from "@/components/menu-top";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full flex flex-col overflow-hidden bg-cover bg-[url('/img/bg.png')]">
      <MenuTop />

      {children}

      {/* <video className="fixed w-full " autoPlay loop muted>
        <source src="/img/bg-video.mp4" type="video/mp4" />
      </video> */}

      <AmbientSound />
    </section>
  );
}
