import { BgGradient } from "@/components/bgGradient";
import { Board } from "@/components/board/board";
import { LeftSide } from "@/components/left-side/left-side";
import {
  fetchActivity,
  fetchKana,
  fetchKanaMissions,
  fetchKanaSpecial,
  fetchLeaderboard,
  fetchPlayerInfo,
} from "@/actions/fetchKana";
import { DataInit } from "@/components/data-init";
import { Support } from "@/components/left-side/support";

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialData = await fetchKana();
  const initialMissions = await fetchKanaMissions();
  const initialSpecial = await fetchKanaSpecial();
  const initialPlayerInfo = await fetchPlayerInfo();
  const initialLeaderboard = await fetchLeaderboard();
  const initialActivity = await fetchActivity();
  return (
    <section className="flex h-full">
      <DataInit
        initialLeaderboard={initialLeaderboard ?? []}
        initialSpecial={initialSpecial ?? []}
        initialData={initialData ?? []}
        initialMissions={initialMissions ?? []}
        initialPlayerInfo={initialPlayerInfo ?? []}
        initialActivity={initialActivity ?? []}
      />

      {/* <Support /> */}

      <div className="p-4">
        <LeftSide />
      </div>

      <Board>{children}</Board>

      <BgGradient />
    </section>
  );
}
