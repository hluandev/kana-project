import { BgGradient } from "@/components/bgGradient";
import { Board } from "@/components/board/board";
import { LeftSide } from "@/components/left-side/left-side";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-full">
      <div className="p-4">
        <LeftSide />
      </div>

      <Board>{children}</Board>

      <BgGradient />
    </section>
  );
}
