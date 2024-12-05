import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import { RotateCcwIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    setReroll,

    setIsEndlessMode,
  } = useScoreStore();

  const {
    setSelectedCard,
    drawHand,
    drawSpecial,
    setCurrentSpecial,
    setFrozenSpecialCards,
  } = useKanaStore();

  const handleLoseSubmit = () => {
    setIsEndlessMode(false);
    setFrozenSpecialCards([]);
    setTurns(4);
    setScore(0);
    setMultiplier(0);
    setProgress(0);
    setAnnouncement("");
    setMissionID(1);
    setDiscard(4);
    setYen(0);
    setReroll(0);
    drawHand();
    drawSpecial();
    setSelectedCard([]);
    setCurrentSpecial([]);
  };

  // useEffect(() => {
  //   playSound("/audio/lose.mp3");
  // }, []);

  return (
    <div className="relative flex items-center  h-full z-10">
      <div className="flex items-center flex-col space-y-6 rounded-2xl bg-black/5 border border-black/15 shadow-inner p-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-red-600 text-7xl"
        >
          You Died
        </motion.div>
        <div>
          <p>Your highest score for this run was 7486</p>
        </div>
        <div className="bg-white border border-black/20 shadow-sm flex items-center gap-2 rounded-full py-1 pl-1 pr-4">
          <ActionButton
            onClick={handleLoseSubmit}
            icon={<RotateCcwIcon strokeWidth={1.7} className="w-5 h-5" />}
            keyboardShortcut="1"
            descTooltip="You got this! :)"
            className="bg-red-600 text-white rounded-full"
          />
          <p className=" font-medium">Play again</p>
        </div>
      </div>
    </div>
  );
};
