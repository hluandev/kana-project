import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import { RotateCcwIcon } from "lucide-react";

export const Lose = () => {
  const {
    setTurns,
    setScore,
    setMultiplier,
    setProgress,
    setMissionID,
    setDiscard,
    setYen,
    setAnnouncement,
  } = useScoreStore();

  const { setSelectedCard, drawHand, drawSpecial, setCurrentSpecial } =
    useKanaStore();

  const handleLoseSubmit = () => {
    setTurns(4);
    setScore(0);
    setMultiplier(0);
    setProgress(0);
    setAnnouncement("");
    setMissionID(1);
    setDiscard(4);
    setYen(0);
    drawHand();
    drawSpecial();
    setSelectedCard([]);
    setCurrentSpecial([]);
  };

  return (
    <div className="relative flex items-center  h-full z-10">
      <div className="flex items-center flex-col space-y-6 rounded-2xl">
        <div className="text-red-600 text-8xl">You Died</div>
        <div className="bg-white flex items-center gap-2 rounded-full py-2 pl-2 pr-4">
          <ActionButton
            onClick={handleLoseSubmit}
            icon={<RotateCcwIcon />}
            keyboardShortcut="1"
            className="bg-red-600 text-white rounded-full"
          />
          <p className="text-xl font-medium">Try again</p>
        </div>
      </div>
    </div>
  );
};
