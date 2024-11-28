"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { motion } from "framer-motion";

export const CurrentHand = () => {
  const { currentHand, currentDeck } = useKanaStore();

  return (
    <div className="w-full z-20">
      <motion.div layout className="flex gap-2 flex-wrap justify-center">
        {currentHand?.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </motion.div>

      <div className="absolute right-5 bottom-5 bg-white rounded-full text-2xl font-medium  h-16 w-16 flex items-center justify-center">
        {currentDeck.length}
      </div>
    </div>
  );
};
