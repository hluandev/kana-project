"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, CombineIcon, LanguagesIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Report } from "./report";
import { ComboHelp } from "./combo-help";
import { useScoreStore } from "@/stores/useScoreStore";
import { ResetGame } from "./reset-game";
import { ToolButton } from "./actions-hand/buttons/tool-button";
import { ReturnButton } from "../left-side/game-info/components/return-button";
import { createPortal } from "react-dom";

export const Tools = () => {
  const {
    currentDeck,
    setShowRomaji,
    showRomaji,
    kanaMissions,
    hiragana,
    setHiragana,
  } = useKanaStore();
  const { missionID, progress, isEndlessMode } = useScoreStore();
  const [isCombineOpen, setIsCombineOpen] = useState(false);
  const [showTools, setShowTools] = useState(true);

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

  useEffect(() => {
    const stored = localStorage.getItem("hiragana");
    if (stored !== null) {
      setHiragana(stored === "true");
    }
  }, [setHiragana]);

  return (
    <>
      {!hasWonGame && (
        <>
          {isCombineOpen &&
            createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center"
              >
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  exit={{ y: 200 }}
                  className="bg-white/15 backdrop-blur-xl rounded-xl relative z-[9999] lg:h-2/3 h-3/4 hideScroll overflow-y-scroll lg:p-4 p-2 space-y-2"
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
              </motion.div>,
              document.body
            )}

          <div className="fixed flex z-[9999] lg:gap-1 gap-0.5 max-lg:left-1 max-lg:bottom-10 lg:right-2 lg:bottom-2">
            <div className="bg-black/80 backdrop-blur-xl rounded-xl text-sm lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center">
              {currentDeck.length}
            </div>

            <ToolButton
              keyboardShortcut="0"
              onClick={() => setIsCombineOpen(true)}
              icon={
                <CombineIcon
                  className="lg:w-5 lg:h-5 w-4 h-4"
                  strokeWidth={1.5}
                />
              }
              label="Show hands"
            />

            <ToolButton
              keyboardShortcut="9"
              onClick={() => setShowRomaji(!showRomaji)}
              icon={
                <LanguagesIcon
                  className="lg:w-5 lg:h-5 w-4 h-4"
                  strokeWidth={1.5}
                />
              }
              isActive={showRomaji}
              label="Hide romaji"
            />

            <ResetGame />

            <Report />

            <div className="">
              <ReturnButton />
            </div>
          </div>
        </>
      )}
    </>
  );
};
