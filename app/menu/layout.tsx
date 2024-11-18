import { AmbientSound } from "@/components/ambient-sound";
import { MenuTop } from "@/components/menu-top";

export default function MenuLayout({
  params,
  children,
}: {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="h-full flex flex-col overflow-hidden">
      <MenuTop />

      {children}

      <video className="fixed w-full " autoPlay loop muted>
        <source src="/img/bg-video.mp4" type="video/mp4" />
        {/* <track srcLang="en" label="English" /> */}
        Your browser does not support the video tag.
      </video>

      <AmbientSound />
    </section>
  );
}
