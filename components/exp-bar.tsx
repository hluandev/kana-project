"use client";

import { motion } from "framer-motion";

export const ProgressBar = () => {
  return (
    <div className="w-[40rem] relative bg-neutral-900 p-1 rounded-full">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "50%", transition: { duration: 1 } }}
        className="bg-neutral-600 h-10 text-white rounded-full text-center"
      ></motion.div>

      <div className="absolute font-bold text-xl top-1/2 text-white -translate-y-1/2 left-1/2 -translate-x-1/2">
        0/15
      </div>
    </div>
  );
};
