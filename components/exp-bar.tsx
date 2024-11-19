"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  profiles: any;
}

export const ExpBar = ({ profiles }: Props) => {
  const [xpPercent, setXpPercent] = useState("100%");

  useEffect(() => {
    const remainingHpPercent = (profiles.exp / 100) * 100;
    setXpPercent(`${Math.max(remainingHpPercent, 0)}%`);
  }, [profiles.exp]);

  return (
    <div className="w-[40rem] overflow-hidden relative bg-yellow-900/60 backdrop-blur-xl p-1 rounded-full">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: xpPercent, transition: { duration: 2 } }}
        className="bg-yellow-500 h-10 text-white rounded-full text-center"
      ></motion.div>

      <div className="absolute font-bold text-xl top-1/2 text-white -translate-y-1/2 left-1/2 -translate-x-1/2">
        Level {profiles.level}
      </div>
    </div>
  );
};
