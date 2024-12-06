"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";
import { Win } from "./win";

export const WinTheGame = () => {
  const { setIsEndlessMode, setEndlessTarget } = useScoreStore();
  const [showShop, setShowShop] = useState(false);

  const handleEndlessMode = () => {
    setIsEndlessMode(true);
    setEndlessTarget(1);
    setShowShop(true);
  };

  return (
    <>
      {showShop ? (
        <Win />
      ) : (
        <div className="flex  flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl font-semibold">Congratulation!</h2>
            <p className=" text-neutral-500 max-w-md text-center">
              Congratulations on winning the game! You can now choose to play
              again or dive into Endless Mode.
            </p>
          </div>

          <div className="flex gap-4">
            <div
              onClick={handleEndlessMode}
              className="bg-white rounded-2xl flex flex-col justify-between p-3 border border-black/15 shadow-sm aspect-square h-48 cursor-pointer hover:bg-opacity-90"
            >
              <div>
                <h1 className=" font-semibold">Play again</h1>
              </div>
              <p className="text-neutral-700 text-sm">
                Start the game from the beginning.
              </p>
            </div>

            <div
              onClick={handleEndlessMode}
              className="bg-[#efcb68] rounded-2xl flex flex-col justify-between p-3 border border-black/15 shadow-sm aspect-square h-48 cursor-pointer hover:bg-opacity-90"
            >
              <div>
                <h1 className=" font-semibold">Play endless</h1>
                <p className="text-sm text-black/50">Premium required</p>
              </div>
              <p className="text-neutral-700 text-sm">
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
