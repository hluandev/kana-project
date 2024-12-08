"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { AnimatePresence, motion } from "framer-motion";
import { CombineIcon, LanguagesIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Report } from "./report";
import { ComboHelp } from "./combo-help";
import { useScoreStore } from "@/stores/useScoreStore";
import { ResetGame } from "./reset-game";
import { ToolButton } from "./actions-hand/buttons/tool-button";

export const Tools = () => {
  const { currentDeck, setShowRomaji, showRomaji, kanaMissions } =
    useKanaStore();
  const { missionID, progress, isEndlessMode } = useScoreStore();
  const [isCombineOpen, setIsCombineOpen] = useState(false);

  const mission = kanaMissions.find((mission) => mission.id === missionID);
  const hasWonGame =
    !isEndlessMode && missionID === 8 && progress >= mission?.target;

  useEffect(() => {
    const stored = localStorage.getItem("showRomaji");
    if (stored !== null) {
      setShowRomaji(stored === "true");
    }
  }, [setShowRomaji]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "0") {
        setIsCombineOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      {!hasWonGame && (
        <>
          <AnimatePresence>
            {isCombineOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
              >
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  exit={{ y: 200 }}
                  className="bg-white rounded-2xl relative z-[9999] h-2/3 hideScroll overflow-y-scroll p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold text-center">
                      Hands
                    </div>

                    <XIcon onClick={() => setIsCombineOpen(false)} />
                  </div>

                  <ComboHelp />
                </motion.div>

                <div
                  onClick={() => setIsCombineOpen(false)}
                  className="bg-black/50 h-full w-full absolute top-0 left-0"
                ></div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="fixed flex flex-col gap-2 right-2 bottom-2">
            <ToolButton
              keyboardShortcut="0"
              onClick={() => setIsCombineOpen(true)}
              icon={<CombineIcon className="w-5 h-5" strokeWidth={1.5} />}
              label="Show hands"
            />

            <ToolButton
              keyboardShortcut="9"
              onClick={() => setShowRomaji(!showRomaji)}
              icon={<LanguagesIcon className="w-5 h-5" strokeWidth={1.5} />}
              isActive={showRomaji}
              label="Hide romaji"
            />

            <ResetGame />

            <Report />

            <div className="bg-white rounded-xl border border-black/10 shadow-sm  h-11 w-11 flex items-center justify-center">
              {currentDeck.length}
            </div>
          </div>
        </>
      )}
    </>
  );
};
