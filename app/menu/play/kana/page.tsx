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

const Kana = async () => {
  const initialData = await fetchKana();
  const initialMissions = await fetchKanaMissions();
  const initialSpecial = await fetchKanaSpecial();
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <DataInit
        initialSpecial={initialSpecial ?? []}
        initialData={initialData ?? []}
        initialMissions={initialMissions ?? []}
      />

      <SpecialHands />

      <CurrentPlayHand />
    </div>
  );
};

export default Kana;
