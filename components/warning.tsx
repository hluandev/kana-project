"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Warning() {
  const { warning, setWarning } = useScoreStore();

  useEffect(() => {
    if (warning) {
      setTimeout(() => {
        setWarning("");
      }, 3000);
    }
  }, [warning]);

  return (
    <>
      <AnimatePresence>
        {warning && (
          <motion.div
            className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 text-red-100 text-2xl font-medium bg-red-600 py-3 px-5 rounded-full"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
          >
            {warning}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
