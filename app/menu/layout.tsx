import { BgGradient } from "@/components/bgGradient";
import { Board } from "@/components/board/board";
import { LeftSide } from "@/components/left-side/left-side";
import { Results } from "@/components/results/results";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-full">
      <Results />

      <div className="p-4">
        <LeftSide />
      </div>

      <Board>{children}</Board>

      {/* <BgGradient /> */}
    </section>
  );
}
