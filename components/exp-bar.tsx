"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const ExpBar = () => {
  const [xpPercent, setXpPercent] = useState("100%");

  return (
    <div className="w-[40rem] relative bg-yellow-900/60 backdrop-blur-xl p-1 rounded-full">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: xpPercent, transition: { duration: 1 } }}
        className="bg-yellow-500 h-10 text-white rounded-full text-center"
      ></motion.div>

      <div className="absolute font-bold text-xl top-1/2 text-white -translate-y-1/2 left-1/2 -translate-x-1/2">
        Level 16
      </div>
    </div>
  );
};
