"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  data: any;
  correctAnswers: any;
  currentJapanese: string;
}

export const EnemyHpBar = ({
  data,
  correctAnswers,
  currentJapanese,
}: Props) => {
  const [enemyHpPercent, setEnemyHpPercent] = useState("100%");

  useEffect(() => {
    const remainingHpPercent =
      ((data.length - correctAnswers.length) / data.length) * 100;
    setEnemyHpPercent(`${Math.max(remainingHpPercent, 0)}%`);
  }, [correctAnswers.length]);

  return (
    <div className="w-[20rem] relative bg-[#931e2d] bg-opacity-50 backdrop-blur-xl p-1 rounded-full">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: enemyHpPercent, transition: { duration: 1 } }}
        className="bg-[#ec1335] h-9 text-white rounded-full text-center"
      ></motion.div>

      <motion.div
        key={currentJapanese}
        initial={{ scale: 3, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, transition: { duration: 0.7 } }}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-2xl  text-white "
      >
        <p className="relative">
          {data.length - correctAnswers.length}

          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            className="absolute left-0 animate-ping"
          >
            {data.length - correctAnswers.length}
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
};
