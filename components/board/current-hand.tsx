"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { motion } from "framer-motion";

export const CurrentHand = () => {
  const { currentHand } = useKanaStore();

  return (
    <div className="w-full">
      <motion.div layout className="flex gap-1 flex-wrap justify-center">
        {currentHand?.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
};
