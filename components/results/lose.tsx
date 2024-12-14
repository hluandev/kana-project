import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import { RotateCcwIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useGameStateStore } from "@/stores/useGameStateStore";

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
    setBossHp,
    setIsEndlessMode,
    setMultiplierBonus,
  } = useScoreStore();

  const { saveGame } = useGameStateStore();
  const {
    setSelectedCard,
    drawHand,
    drawSpecial,
    setCurrentSpecial,
    setCurrentUpgrades,
    setFrozenSpecialCards,
  } = useKanaStore();

  const handleLoseSubmit = async () => {
    setIsEndlessMode(false);
    setFrozenSpecialCards([]);
    setTurns(4);
    setScore(0);
    setBossHp(33900);
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
    setSelectedCard([]);
    setCurrentSpecial([]);
    setCurrentUpgrades([]);
    await saveGame();
  };

  // useEffect(() => {
  //   playSound("/audio/lose.mp3");
  // }, []);

  return (
    <div className="relative flex items-center  h-full z-10">
      <div className="flex items-center flex-col space-y-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-red-600 text-7xl"
        >
          You Died
        </motion.div>

        <div className="bg-black/80 backdrop-blur-xl flex items-center gap-2 rounded-full py-1 pl-1 pr-4">
          <ActionButton
            hideTooltip
            onClick={handleLoseSubmit}
            icon={<RotateCcwIcon strokeWidth={1.7} className="w-5 h-5" />}
            keyboardShortcut="1"
            className="bg-red-600 text-white rounded-full"
          />
          <p className=" font-medium">Play again</p>
        </div>
      </div>
    </div>
  );
};
