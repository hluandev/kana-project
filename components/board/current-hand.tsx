"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { AnimatePresence, motion } from "framer-motion";
import { CombineIcon, LanguagesIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { ComboBox } from "../combo/combo-box";
import { Report } from "./report";

export const CurrentHand = () => {
  const { currentHand, currentDeck, setShowRomaji, showRomaji } =
    useKanaStore();
  const [isCombineOpen, setIsCombineOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("showRomaji");
    if (stored !== null) {
      setShowRomaji(stored === "true");
    }
  }, [setShowRomaji]);

  return (
    <div className="w-full z-20">
      <motion.div layout className="flex gap-2 flex-wrap justify-center">
        {currentHand?.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </motion.div>

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
              className="bg-white rounded-2xl relative z-[9999] p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">Combo hands</p>
                <XIcon onClick={() => setIsCombineOpen(false)} />
              </div>

              <div className="space-y-5">
                <ComboBox
                  point={100}
                  multiplier={8}
                  title="Straigh Flush"
                  description="Ranks in order and same suit"
                  example="1あ 2あ 3あ 4あ 5あ"
                />
                <ComboBox
                  point={60}
                  multiplier={5}
                  title="Four of a Kind"
                  description="4 cards of the same rank"
                  example="1あ 1い 1う 1え 5お"
                />
                <ComboBox
                  point={40}
                  multiplier={4}
                  title="Full House"
                  description="3 cards of one rank and 2 cards of another rank"
                  example="1あ 1い 1う 5え 5お"
                />
                <ComboBox
                  point={40}
                  multiplier={3}
                  title="Flush"
                  description="5 cards of the same suit"
                  example="1あ 3あ 5あ 6あ 8あ"
                />
                <ComboBox
                  point={30}
                  multiplier={3}
                  title="Straight"
                  description="Ranks in order"
                  example="1あ 2い 3う 4え 5お"
                />
                <ComboBox
                  point={20}
                  multiplier={3}
                  title="Three of a Kind"
                  description="3 cards of the same rank"
                  example="1あ 1い 1う 4え 5お"
                />
                <ComboBox
                  point={20}
                  multiplier={2}
                  title="Two Pair"
                  description="2 cards of one rank, 2 cards of another rank"
                  example="1あ 1い 2う 2え 3お"
                />
                <ComboBox
                  point={10}
                  multiplier={2}
                  title="Pair"
                  description="2 cards of the same rank"
                  example="1あ 1い 2う 3え 4お"
                />
                <ComboBox
                  point={5}
                  multiplier={1}
                  title="High Card"
                  description="No combination"
                  example="1あ 2い 4う 5え 7お"
                />
              </div>
            </motion.div>

            <div
              onClick={() => setIsCombineOpen(false)}
              className="bg-black/50 h-full w-full absolute top-0 left-0"
            ></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed space-y-4 right-4 bottom-4">
        <div
          onClick={() => setIsCombineOpen(true)}
          className="bg-white rounded-full  h-14 w-14 flex items-center justify-center"
        >
          <CombineIcon />
        </div>

        <div
          onClick={() => {
            setShowRomaji(!showRomaji);
          }}
          className={`${
            showRomaji ? "bg-white" : "bg-black text-white"
          } rounded-full  duration-300 h-14 w-14 flex items-center justify-center`}
        >
          <LanguagesIcon />
        </div>

        <Report />

        <div className="bg-white rounded-full text-xl font-semibold  h-14 w-14 flex items-center justify-center">
          {currentDeck.length}
        </div>
      </div>
    </div>
  );
};
