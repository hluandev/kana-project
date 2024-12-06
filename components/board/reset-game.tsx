import { useGameStateStore } from "@/stores/useGameStateStore";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { motion } from "framer-motion";
import { BugIcon, Loader2, RotateCwIcon, Send, XIcon } from "lucide-react";
import { useState } from "react";

export const ResetGame = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { saveGame } = useGameStateStore();
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
    setEndlessTarget,
    setIsEndlessMode,
    setMultiplierBonus,
  } = useScoreStore();

  const {
    setSelectedCard,
    drawHand,
    drawSpecial,
    setCurrentSpecial,
    setFrozenSpecialCards,
    setCurrentUpgrades,
  } = useKanaStore();

  const handleLoseSubmit = async () => {
    setIsEndlessMode(false);
    setFrozenSpecialCards([]);
    setTurns(4);
    setScore(0);
    setMultiplier(0);
    setProgress(0);
    setMultiplierBonus(0);
    setAnnouncement("");
    setMissionID(1);
    setDiscard(4);
    setYen(0);
    setReroll(0);
    drawHand();
    drawSpecial();
    setCurrentSpecial([]);
    setSelectedCard([]);
    setCurrentUpgrades([]);
    setIsOpen(false);
    await saveGame();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed flex justify-center items-center z-50 top-0 left-0 w-full h-full bg-black/50">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl w-1/4 h-1/3 p-4 flex flex-col gap-y-2"
          >
            <div className="flex justify-between items-center text-sm">
              Do you want to reset the game?
            </div>
            <button onClick={handleLoseSubmit}>Yes</button>
          </motion.div>
        </div>
      )}
      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white rounded-xl border border-black/15 shadow-sm  duration-300 h-12 w-12 flex items-center justify-center`}
      >
        <RotateCwIcon className="w-5 h-5" strokeWidth={1.5} />
      </div>
    </>
  );
};
