"use client";

import { useKanaStore } from "@/store/useKanaStore";
import { useEffect, useState } from "react";
import CardHand from "./card-hand";
import { useScoreStore } from "@/store/useScoreStore";

export default function Hands() {
  const { initKana, kanaDeck, setKanaDeck, readyHand, setReadyHand } =
    useKanaStore();
  const [hand, setHand] = useState<any[]>([]);
  const { score, multiplier, setScore, setMultiplier } = useScoreStore();
  useEffect(() => {
    drawHand();
  }, [initKana]);

  const drawHand = () => {
    const currentDeck = [...kanaDeck];
    const newHand = [];

    for (let i = 0; i < 8 && currentDeck.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * currentDeck.length);
      newHand.push(currentDeck.splice(randomIndex, 1)[0]);
    }

    newHand.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });

    setKanaDeck(currentDeck);
    setHand(newHand);
  };

  // Check for pairs in readyHand
  const checkForPair = () => {
    const ranks = readyHand.map((card) => card.rank);
    let pairFound = false;
    let pairRankSum = 0;

    // Find the first pair and get their rank sum
    ranks.some((rank, index) => {
      const pairIndex = ranks.slice(index + 1).indexOf(rank);
      if (pairIndex !== -1) {
        pairRankSum = rank * 2; // Multiply by 2 since it's a pair
        pairFound = true;
        return true;
      }
      return false;
    });

    if (pairFound) {
      setMultiplier(multiplier + 2);
      setScore(score + (10 + pairRankSum)); // Add both base score (10) and pair rank values
    }

    return pairFound;
  };

  const playHand = () => {
    const hasPair = checkForPair();

    if (hasPair) {
      console.log("has pair");
    }

    const updatedHand = hand.filter((card) => !readyHand.includes(card));
    const cardsNeeded = 8 - updatedHand.length;
    const currentDeck = [...kanaDeck];

    for (let i = 0; i < cardsNeeded && currentDeck.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * currentDeck.length);
      updatedHand.push(currentDeck.splice(randomIndex, 1)[0]);
    }

    updatedHand.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });

    setKanaDeck(currentDeck);
    setHand(updatedHand);
    setReadyHand([]);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-2">
        {hand.map((card) => (
          <CardHand key={card.id} kana={card} />
        ))}
      </div>

      <div className="flex gap-4">
        <button className="bg-neutral-800 p-2 rounded-lg">Discard</button>
        <button className="bg-blue-700 p-2 rounded-lg" onClick={playHand}>
          Play Hand
        </button>
      </div>
    </div>
  );
}
