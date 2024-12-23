import { createPortal } from "react-dom";
import { updateActivityServer } from "@/actions/server/activity-server-actions";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import { useGameStateStore } from "@/stores/useGameStateStore";
import { useKanaStore } from "@/stores/useKanaStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { AnimatePresence, motion } from "framer-motion";
import { BugIcon, Loader2, RotateCwIcon, Send, XIcon } from "lucide-react";
import { useState } from "react";

export const ResetGame = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { saveGame } = useGameStateStore();
  const { updateLosses, info } = usePlayerStore();
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
    setBossHp,
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
    updateLosses(info.losses + 1);
    setIsEndlessMode(false);
    setFrozenSpecialCards([]);
    setBossHp(33900);
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
    updatePlayerInfoServer({
      id: info.id,
      losses: info.losses + 1,
      matches: info.matches + 1,
    });
    updateActivityServer({
      losses: info.losses + 1,
      matches: info.matches + 1,
    });
    setIsOpen(false);
    await saveGame();
  };

  return (
    <>
      {isOpen &&
        createPortal(
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
              className="bg-black/80 backdrop-blur-xl relative z-[9999] rounded-xl w-[16rem] p-3 flex flex-col gap-y-2"
            >
              <div className="flex flex-col gap-1">
                <p className="font-medium">Do you want to reset the game?</p>
                <p className="text-white/50">
                  This round will be counted as a loss.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 p-2 rounded-lg text-white"
                >
                  No
                </button>
                <button
                  onClick={handleLoseSubmit}
                  className="bg-red-600 p-2 rounded-lg text-white"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white/15 backdrop-blur-xl rounded-xl duration-300 lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center"
      >
        <RotateCwIcon className="lg:w-5 lg:h-5 w-4 h-4" strokeWidth={1.5} />
      </div>
    </>
  );
};
