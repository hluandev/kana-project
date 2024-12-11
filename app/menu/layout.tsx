import { BgGradient } from "@/components/bgGradient";
import { Board } from "@/components/board/board";
import { LeftSide } from "@/components/left-side/left-side";
import {
  fetchKana,
  fetchKanaMissions,
  fetchKanaSpecial,
  fetchPlayerInfo,
} from "@/actions/fetchKana";
import { DataInit } from "@/components/data-init";

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialData = await fetchKana();
  const initialMissions = await fetchKanaMissions();
  const initialSpecial = await fetchKanaSpecial();
  const initialPlayerInfo = await fetchPlayerInfo();
  return (
    <section className="flex max-lg:flex-col-reverse h-full bg-black/5 shadow-inner">
      <DataInit
        initialSpecial={initialSpecial ?? []}
        initialData={initialData ?? []}
        initialMissions={initialMissions ?? []}
        initialPlayerInfo={initialPlayerInfo ?? []}
      />

      <LeftSide />

      <Board>{children}</Board>

      {/* <BgGradient /> */}
    </section>
  );
}
