import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import { RotateCcwIcon } from "lucide-react";
import { useCallback, useEffect } from "react";
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
    setReroll(0);
    drawHand();
    drawSpecial();
    setSelectedCard([]);
    setCurrentSpecial([]);
  };

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio("/audio/lose.wav");
      audio.volume = 0.5;
      audio
        .play()
        .catch((error) => console.log("Audio playback failed:", error));
    };

    playSound();
  }, []);

  return (
    <div className="relative flex items-center  h-full z-10">
      <div className="flex items-center flex-col space-y-6 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-red-600 text-8xl"
        >
          You Died
        </motion.div>
        <div className="bg-white flex items-center gap-2 rounded-full py-2 pl-2 pr-4">
          <ActionButton
            onClick={handleLoseSubmit}
            icon={<RotateCcwIcon />}
            keyboardShortcut="1"
            className="bg-red-600 text-white rounded-full"
          />
          <p className="text-xl font-medium">Play again</p>
        </div>
      </div>
    </div>
  );
};
