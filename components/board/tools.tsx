"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { AnimatePresence, motion } from "framer-motion";
import { CombineIcon, LanguagesIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Report } from "./report";
import { ComboHelp } from "./combo-help";
import { useScoreStore } from "@/stores/useScoreStore";
import { ResetGame } from "./reset-game";

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

          <div className="fixed flex flex-col gap-2 right-4 bottom-4">
            <div
              onClick={() => setIsCombineOpen(true)}
              className="bg-white rounded-xl border border-black/15 shadow-sm  h-12 w-12 flex items-center justify-center"
            >
              <CombineIcon className="w-5 h-5" strokeWidth={1.5} />
            </div>

            <div
              onClick={() => {
                setShowRomaji(!showRomaji);
              }}
              className={`${
                showRomaji ? "bg-white" : "bg-black text-white"
              } rounded-xl border border-black/15 shadow-sm  duration-300 h-12 w-12 flex items-center justify-center`}
            >
              <LanguagesIcon className="w-5 h-5" strokeWidth={1.5} />
            </div>

            <Report />

            <ResetGame />

            <div className="bg-white rounded-xl border border-black/15 shadow-sm  h-12 w-12 flex items-center justify-center">
              {currentDeck.length}
            </div>
          </div>
        </>
      )}
    </>
  );
};
