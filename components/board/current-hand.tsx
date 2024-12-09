"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { motion } from "framer-motion";

export const CurrentHand = () => {
  const { currentHand } = useKanaStore();

  return (
    <div className="lg:w-full w-fit">
      <motion.div
        layout
        className="lg:flex  max-lg:grid max-lg:grid-cols-4 gap-1 lg:flex-wrap justify-center"
      >
        {currentHand?.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
};
