import { useGameStateStore } from "@/stores/useGameStateStore";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed flex justify-center items-center z-[9999] top-0 left-0 w-full h-full bg-black/40"
          >
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200 }}
              className="bg-[#fafafa] rounded-xl w-[16rem] p-4 flex flex-col gap-y-2"
            >
              <div className="flex justify-between items-center text-sm">
                Do you want to reset the game?
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 p-2 rounded-lg border border-black/15 shadow-sm text-white"
                >
                  No
                </button>
                <button
                  onClick={handleLoseSubmit}
                  className="bg-red-600 p-2 rounded-lg border border-black/15 shadow-sm text-white"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white rounded-xl border border-black/15 shadow-sm  duration-300 h-12 w-12 flex items-center justify-center`}
      >
        <RotateCwIcon className="w-5 h-5" strokeWidth={1.5} />
      </div>
    </>
  );
};
