"use client";

import { useScoreStore } from "@/stores/useScoreStore";
import { useState } from "react";
import { Win } from "./win";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useKanaStore } from "@/stores/useKanaStore";
import { useGameStateStore } from "@/stores/useGameStateStore";
import { checkIfSubBefore } from "@/actions/server/use-server/check-if-sub-before";
import { updatePlayerGate } from "@/actions/server/use-server/update-player-gate";
import { useRouter } from "next/navigation";

export const WinTheGame = () => {
  const { info, isSubscribed } = usePlayerStore();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [showShop, setShowShop] = useState(false);
  const [loading, setLoading] = useState(false);
  const { saveGame } = useGameStateStore();
  const {
    setTurns,
    setScore,
    setMultiplier,
    setProgress,
    setMultiplierBonus,
    setMissionID,
    setDiscard,
    setYen,
    setAnnouncement,
    setReroll,
    setBossHp,
    setEndlessTarget,
    setIsEndlessMode,
  } = useScoreStore();

  const {
    setSelectedCard,
    drawHand,
    drawSpecial,
    setCurrentSpecial,
    setFrozenSpecialCards,
    setCurrentUpgrades,
  } = useKanaStore();

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      setError(null);

      const subBefore = await checkIfSubBefore();

      const endpoint = subBefore ? "/api/stripe/resubscribe" : "/api/stripe";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to process subscription");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No redirect URL received");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleEndlessMode = () => {
    if (isSubscribed) {
      setIsEndlessMode(true);
      setBossHp(Infinity);
      setShowShop(true);
    } else {
      handleSubscribe();
    }
  };

  const handleLoseSubmit = async () => {
    setIsEndlessMode(false);
    setFrozenSpecialCards([]);
    setTurns(4);
    setScore(0);
    setMultiplier(0);
    setMultiplierBonus(0);
    setProgress(0);
    setBossHp(33900);
    setAnnouncement("");
    setMissionID(1);
    setDiscard(4);
    setYen(0);
    setReroll(0);
    drawHand();
    drawSpecial();
    setCurrentSpecial([]);
    setSelectedCard([]);
    setCurrentUpgrades([]);
    await saveGame();
  };

  const handleNextGate = async () => {
    router.push(`/menu/play/gate${info.gate + 1}`);
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
              onClick={handleLoseSubmit}
              className="bg-white rounded-xl flex flex-col justify-between p-3 border   aspect-square h-48 cursor-pointer hover:bg-opacity-90"
            >
              <div>
                <h1 className=" font-semibold">Play again</h1>
              </div>
              <p className="text-neutral-700 ">
                Start the game from the beginning.
              </p>
            </div>

            <div
              onClick={handleNextGate}
              className="bg-white rounded-xl flex flex-col justify-between p-3 border   aspect-square h-48 cursor-pointer hover:bg-opacity-90"
            >
              <div>
                <h1 className=" font-semibold">Next gate</h1>
              </div>
              <p className="text-neutral-700 ">Start the next gate.</p>
            </div>

            <div
              onClick={handleEndlessMode}
              className="bg-[#efcb68] rounded-xl flex flex-col justify-between p-3 border   aspect-square h-48 cursor-pointer hover:bg-opacity-90"
            >
              <div>
                <h1 className=" font-semibold">Play endless</h1>
                <p className=" text-black/50">Premium required</p>
              </div>
              <p className="text-neutral-700 ">
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
