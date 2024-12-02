"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";
import { Win } from "./win";

export const WinTheGame = () => {
  const { setIsEndlessMode, setEndlessTarget } = useScoreStore();
  const [showShop, setShowShop] = useState(false);

  const handleEndlessMode = () => {
    setIsEndlessMode(true);
    setEndlessTarget(10);
    // setMissionID(9);
    // setProgress(0);
    setShowShop(true);
  };

  return (
    <>
      {showShop ? (
        <Win />
      ) : (
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-5xl font-semibold">Congratulation!</h2>
            <p className="text-lg text-neutral-500">
              You won the game. You can now play again or play Endless Mode.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white rounded-2xl flex flex-col justify-between p-4 aspect-square w-60">
              <h1 className="text-2xl font-semibold">Play again</h1>
              <p className="text-neutral-500">
                Play the game again from the beginning.
              </p>
            </div>

            <div
              onClick={handleEndlessMode}
              className="bg-[#efcb68] rounded-2xl flex flex-col justify-between p-4 aspect-square w-60 cursor-pointer hover:bg-opacity-90"
            >
              <h1 className="text-2xl font-semibold">Play endless</h1>
              <p className="text-neutral-700">
                Play the game in endless mode and keep scoring higher and
                higher.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
