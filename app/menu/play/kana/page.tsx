import {
  fetchKana,
  fetchKanaMissions,
  fetchKanaSpecial,
  fetchPlayerInfo,
} from "@/actions/fetchKana";
import { checkSubscription } from "@/actions/server/check-subscription";
import CurrentPlayHand from "@/components/board/actions-hand/current-play-hand";
import { SpecialHands } from "@/components/board/special-hand";
import { DataInit } from "@/components/data-init";
import Warning from "@/components/warning";

const Kana = async () => {
  const initialData = await fetchKana();
  const initialMissions = await fetchKanaMissions();
  const initialSpecial = await fetchKanaSpecial();
  const initialPlayerInfo = await fetchPlayerInfo();
  const isSubscribed = await checkSubscription();
  return (
    <div className="flex relative flex-col items-center justify-between h-full">
      <DataInit
        initialSpecial={initialSpecial ?? []}
        initialData={initialData ?? []}
        initialMissions={initialMissions ?? []}
        initialPlayerInfo={initialPlayerInfo ?? []}
        isSubscribed={isSubscribed}
      />

      <SpecialHands />

      <Warning />

      <CurrentPlayHand />
    </div>
  );
};

export default Kana;
