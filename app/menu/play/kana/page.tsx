import CurrentPlayHand from "@/components/board/actions-hand/current-play-hand";
import { SpecialHands } from "@/components/board/special-hand";
import Warning from "@/components/warning";

const Kana = () => {
  return (
    <div className="flex relative flex-col items-center justify-between h-full">
      <SpecialHands />

      <Warning />

      <CurrentPlayHand />
    </div>
  );
};

export default Kana;
