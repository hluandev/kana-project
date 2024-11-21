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
        pairRankSum = rank * 2;
        pairFound = true;
        return true;
      }
      return false;
    });

    if (pairFound) {
      setMultiplier(multiplier + 2);
      setScore(score + (10 + pairRankSum));
    }

    return pairFound;
  };

  // Check for two pairs in readyHand
  const checkForTwoPair = () => {
    const ranks = readyHand.map((card) => card.rank);
    const pairs: number[] = [];
    let totalRankSum = 0;

    // Find all pairs
    ranks.forEach((rank, index) => {
      const pairIndex = ranks.slice(index + 1).indexOf(rank);
      if (pairIndex !== -1 && !pairs.includes(rank)) {
        pairs.push(rank);
        totalRankSum += rank * 2;
      }
    });

    if (pairs.length === 2) {
      setMultiplier(multiplier + 2);
      setScore(score + (20 + totalRankSum)); // Higher base score (20) for two pair
      return true;
    }

    return false;
  };

  // Check for three of the same rank in readyHand
  const checkForThreeOfTheSameRank = () => {
    const ranks = readyHand.map((card) => card.rank);
    const rankCounts = new Map();

    // Count occurrences of each rank
    ranks.forEach((rank) => {
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });

    // Find a rank that appears exactly three times
    for (const [rank, count] of Array.from(rankCounts.entries())) {
      if (count === 3) {
        setMultiplier(multiplier + 3);
        setScore(score + (20 + rank * 3)); // Higher base score (30) for three of a kind
        return true;
      }
    }

    return false;
  };

  // Add this new function before playHand
  const checkForStraight = () => {
    if (readyHand.length !== 5) return false;

    // Sort the ranks in ascending order
    const ranks = readyHand.map((card) => card.rank).sort((a, b) => a - b);

    // Check if each card is sequential
    for (let i = 1; i < ranks.length; i++) {
      if (ranks[i] !== ranks[i - 1] + 1) {
        return false;
      }
    }

    // Calculate score based on the highest card in the straight
    const highestRank = ranks[ranks.length - 1];
    setMultiplier(multiplier + 3);
    setScore(score + (30 + highestRank)); // Higher base score (30) for straight
    return true;
  };

  // Add this new function before playHand
  const checkForFlush = () => {
    if (readyHand.length !== 5) return false;

    // Get the suit of the first card
    const firstSuit = readyHand[0].suit;

    // Check if all cards have the same suit
    const isFlush = readyHand.every((card) => card.suit === firstSuit);

    if (isFlush) {
      // Calculate score based on the highest card in the flush
      const highestRank = Math.max(...readyHand.map((card) => card.rank));
      setMultiplier(multiplier + 3);
      setScore(score + (40 + highestRank)); // Base score of 40 for flush
      return true;
    }

    return false;
  };

  const playHand = () => {
    const hasStraight = readyHand.length === 5 && checkForStraight();
    const hasFlush = !hasStraight && readyHand.length === 5 && checkForFlush();
    const hasThreeOfAKind =
      !hasStraight && !hasFlush && checkForThreeOfTheSameRank();
    const hasTwoPair =
      !hasStraight && !hasFlush && !hasThreeOfAKind && checkForTwoPair();
    const hasPair =
      !hasStraight &&
      !hasFlush &&
      !hasThreeOfAKind &&
      !hasTwoPair &&
      checkForPair();

    if (hasStraight) {
      console.log("has straight");
    } else if (hasFlush) {
      console.log("has flush");
    } else if (hasThreeOfAKind) {
      console.log("has three of a kind");
    } else if (hasTwoPair) {
      console.log("has two pair");
    } else if (hasPair) {
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
