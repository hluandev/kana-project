import { fetchKana, fetchKanaMissions } from "@/actions/fetchKana";
import { ActionsHand } from "@/components/board/actions-hand/actions-hand";
import { CurrentHand } from "@/components/board/current-hand";
import { SpecialHands } from "@/components/board/special-hand";
import { DataInit } from "@/components/data-init";

const Kana = async () => {
  const initialData = await fetchKana();
  const initialMissions = await fetchKanaMissions();
  return (
    <div className="flex flex-col justify-between h-full">
      <DataInit
        initialData={initialData ?? []}
        initialMissions={initialMissions ?? []}
      />
      <SpecialHands />

      <div>
        <CurrentHand />
        <ActionsHand />
      </div>
    </div>
  );
};

export default Kana;
