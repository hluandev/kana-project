import {
  fetchKana,
  fetchKanaMissions,
  fetchKanaSpecial,
} from "@/actions/fetchKana";
import { ActionsHand } from "@/components/board/actions-hand/actions-hand";
import CurrentPlayHand from "@/components/board/actions-hand/current-play-hand";
import { CurrentHand } from "@/components/board/current-hand";
import { SpecialHands } from "@/components/board/special-hand";
import { DataInit } from "@/components/data-init";
import Warning from "@/components/warning";

const Kana = async () => {
  const initialData = await fetchKana();
  const initialMissions = await fetchKanaMissions();
  const initialSpecial = await fetchKanaSpecial();
  return (
    <div className="flex relative flex-col items-center justify-between h-full">
      <DataInit
        initialSpecial={initialSpecial ?? []}
        initialData={initialData ?? []}
        initialMissions={initialMissions ?? []}
      />

      <SpecialHands />

      <Warning />

      <CurrentPlayHand />
    </div>
  );
};

export default Kana;
