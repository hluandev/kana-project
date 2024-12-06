import { useKanaStore } from "@/stores/useKanaStore";
import { ActionButton } from "./action-button";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { playSound } from "@/actions/client/play-sound";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { updateActivityServer } from "@/actions/server/activity-server-actions";

export const PlaySelected = () => {
  const {
    selectedCard,
    currentHand,
    currentDeck,
    setCurrentHand,
    setCurrentDeck,
    setSelectedCard,
    currentSpecial,
    kanaMissions,
    setActiveSpecials,
    currentUpgrades,
  } = useKanaStore();
  const {
    score,
    multiplier,
    setScore,
    setMultiplier,
    turns,
    setTurns,
    missionID,
    setAnnouncement,
    setWarning,
    progress,
    setProgress,
    yen,
    setYen,
    reroll,
    isEndlessMode,
    endlessTarget,

    multiplierBonus,
  } = useScoreStore();

  const { info, updateXp, updateLosses, updateWins } = usePlayerStore();
  const rankCount = new Map<string, number>();

  const checkHand = () => {
    rankCount.clear();
    const ranks = selectedCard
      .map((card) => card.rank)
      .map((rank) => parseInt(rank))
      .sort((a, b) => a - b)
      .map((rank) => rank.toString());

    const suitCount = new Map<string, number>();
    selectedCard.forEach((card) => {
      const count = suitCount.get(card.suit) || 0;
      suitCount.set(card.suit, count + 1);
    });

    let hasStraightFlush = false;
    let hasFlush = false;

    const cardsBySuit = new Map<string, any[]>();
    selectedCard.forEach((card) => {
      const cards = cardsBySuit.get(card.suit) || [];
      cardsBySuit.set(card.suit, [...cards, card]);
    });

    cardsBySuit.forEach((cards) => {
      if (cards.length >= 5) {
        const sortedRanks = cards
          .map((card) => parseInt(card.rank))
          .sort((a, b) => a - b);
        for (let i = 0; i <= sortedRanks.length - 5; i++) {
          const sequence = sortedRanks.slice(i, i + 5);
          const isSequential = sequence.every(
            (rank, index) => index === 0 || rank === sequence[index - 1] + 1
          );
          if (isSequential) {
            hasStraightFlush = true;
            break;
          }
        }
      }
    });

    selectedCard.forEach((card) => {
      const count = rankCount.get(card.rank) || 0;
      rankCount.set(card.rank, count + 1);
    });

    let hasStraight = false;
    if (ranks.length >= 5) {
      for (let i = 0; i <= ranks.length - 5; i++) {
        const sequence = ranks.slice(i, i + 5);
        const isSequential = sequence.every(
          (rank, index) =>
            index === 0 || parseInt(rank) === parseInt(sequence[index - 1]) + 1
        );
        if (isSequential) {
          hasStraight = true;
          break;
        }
      }
    }

    let pairCount = 0;
    let hasThreeOfKind = false;
    let hasFourOfKind = false;
    let hasFullHouse = false;
    const rankValues = Array.from(rankCount.values());

    rankValues.forEach((count) => {
      if (count >= 4) {
        hasFourOfKind = true;
      } else if (count >= 3) {
        hasThreeOfKind = true;
      }
      if (count === 2) {
        pairCount++;
      }
    });

    hasFullHouse = hasThreeOfKind && pairCount >= 1;

    suitCount.forEach((count) => {
      if (count >= 5) {
        hasFlush = true;
      }
    });

    return {
      hasPair: pairCount === 1,
      hasTwoPair: pairCount === 2,
      hasThreeOfKind,
      hasStraight,
      hasFlush,
      hasFullHouse,
      hasFourOfKind,
      hasStraightFlush,
    };
  };

  useEffect(() => {
    if (selectedCard.length === 0) {
      setAnnouncement("");
      setScore(0);
      setMultiplier(0);
      setActiveSpecials([]);
      return;
    }

    const {
      hasPair,
      hasTwoPair,
      hasThreeOfKind,
      hasStraight,
      hasFlush,
      hasFullHouse,
      hasFourOfKind,
      hasStraightFlush,
    } = checkHand();

    const cardRanks = selectedCard.map((card) => parseInt(card.rank));

    let rankPoints = 0;
    let newScore = 0;
    let newMultiplier = 1;

    if (hasStraightFlush) {
      rankPoints = cardRanks
        .sort((a, b) => b - a)
        .slice(0, 5)
        .reduce((sum, rank) => sum + rank, 0);
      newScore = 100 + rankPoints;
      newMultiplier = 8;
      setAnnouncement("straight_flush");
    } else if (hasFourOfKind) {
      const fourKindRank = Array.from(rankCount.entries()).find(
        ([_, count]) => count === 4
      )?.[0];
      rankPoints = fourKindRank ? parseInt(fourKindRank) * 4 : 0;
      newScore = 60 + rankPoints;
      newMultiplier = 5;
      setAnnouncement("four_of_a_kind");
    } else if (hasFullHouse) {
      const threeKindRank = Array.from(rankCount.entries()).find(
        ([_, count]) => count === 3
      )?.[0];
      const pairRank = Array.from(rankCount.entries()).find(
        ([_, count]) => count === 2
      )?.[0];
      rankPoints =
        (threeKindRank ? parseInt(threeKindRank) * 3 : 0) +
        (pairRank ? parseInt(pairRank) * 2 : 0);
      newScore = 40 + rankPoints;
      newMultiplier = 4;
      setAnnouncement("full_house");
    } else if (hasStraight) {
      rankPoints = cardRanks
        .sort((a, b) => b - a)
        .slice(0, 5)
        .reduce((sum, rank) => sum + rank, 0);
      newScore = 30 + rankPoints;
      newMultiplier = 3;
      setAnnouncement("straight");
    } else if (hasFlush) {
      rankPoints = cardRanks
        .sort((a, b) => b - a)
        .slice(0, 5)
        .reduce((sum, rank) => sum + rank, 0);
      newScore = 40 + rankPoints;
      newMultiplier = 3;
      setAnnouncement("flush");
    } else if (hasThreeOfKind) {
      const threeKindRank = Array.from(rankCount.entries()).find(
        ([_, count]) => count === 3
      )?.[0];
      rankPoints = threeKindRank ? parseInt(threeKindRank) * 3 : 0;
      newScore = 20 + rankPoints;
      newMultiplier = 3;
      setAnnouncement("three_of_a_kind");
    } else if (hasTwoPair) {
      const pairRanks = Array.from(rankCount.entries())
        .filter(([_, count]) => count === 2)
        .map(([rank, _]) => parseInt(rank));
      rankPoints = pairRanks.reduce((sum, rank) => sum + rank * 2, 0);
      newScore = 20 + rankPoints;
      newMultiplier = 2;
      setAnnouncement("two_pairs");
    } else if (hasPair) {
      const pairRank = Array.from(rankCount.entries()).find(
        ([_, count]) => count === 2
      )?.[0];
      rankPoints = pairRank ? parseInt(pairRank) * 2 : 0;
      newScore = 10 + rankPoints;
      newMultiplier = 2;
      setAnnouncement("pair");
    } else {
      rankPoints = Math.max(...cardRanks);
      newScore = 5 + rankPoints;
      newMultiplier = 1;
      setAnnouncement("high_card");
    }

    let finalScore = newScore;
    let finalMultiplier = newMultiplier;
    const currentAnnouncement = hasStraightFlush
      ? "straight_flush"
      : hasFourOfKind
      ? "four_of_a_kind"
      : hasFullHouse
      ? "full_house"
      : hasStraight
      ? "straight"
      : hasFlush
      ? "flush"
      : hasThreeOfKind
      ? "three_of_a_kind"
      : hasTwoPair
      ? "two_pairs"
      : hasPair
      ? "pair"
      : "high_card";

    const activeSpecialIds: string[] = [];

    currentSpecial.concat(currentUpgrades).forEach((special) => {
      // Check all valid combinations for this hand
      const validCombos = [currentAnnouncement];
      if (hasPair) validCombos.push("pair");
      if (hasTwoPair) {
        validCombos.push("two_pairs", "pair");
      }
      if (hasThreeOfKind) validCombos.push("three_of_a_kind", "pair");
      if (hasStraight) validCombos.push("straight");
      if (hasFlush) validCombos.push("flush");
      if (hasFullHouse) {
        validCombos.push("full_house", "three_of_a_kind", "pair", "two_pairs");
      }
      if (hasFourOfKind) {
        validCombos.push(
          "four_of_a_kind",
          "three_of_a_kind",
          "pair",
          "two_pairs"
        );
      }
      if (hasStraightFlush) {
        validCombos.push("straight_flush", "straight", "flush");
      }

      // Effects
      if (special.combo === "none" && special.condition === "multiples") {
        finalMultiplier += special.reward;
      }

      if (
        validCombos.includes(special.combo) &&
        special.condition === "upgrade"
      ) {
        finalMultiplier += special.reward_multiplier;
      }

      if (
        validCombos.includes(special.combo) &&
        special.condition === "multiples"
      ) {
        finalMultiplier += special.reward;
      }

      if (
        validCombos.includes(special.combo) &&
        special.condition === "xmultiples"
      ) {
        finalMultiplier *= special.reward;
      }

      if (special.combo === "none" && special.condition === "points") {
        finalScore += special.reward;
      }

      if (
        validCombos.includes(special.combo) &&
        special.condition === "upgrade"
      ) {
        finalScore += special.reward_points;
      }

      if (
        validCombos.includes(special.combo) &&
        special.condition === "points"
      ) {
        finalScore += special.reward;
      }

      if (
        special.condition === "reroll" &&
        currentSpecial.some((card) => card.condition === "reroll")
      ) {
        finalMultiplier += reroll * 2;
      }

      if (special.condition === "bought") {
        finalMultiplier += multiplierBonus * 5;
      }

      const isActive =
        // Base points special (no combo requirement)
        (special.combo === "none" && special.condition === "points") ||
        // Combo-specific points
        (validCombos.includes(special.combo) &&
          special.condition === "points") ||
        // Base multiplier special
        (special.combo === "none" && special.condition === "multiples") ||
        // Combo-specific multiplier
        (validCombos.includes(special.combo) &&
          ["upgrade", "multiples", "xmultiples"].includes(special.condition)) ||
        // Reroll bonus
        (special.condition === "reroll" &&
          currentSpecial.some((card) => card.condition === "reroll")) ||
        // Bought bonus
        special.condition === "bought";

      if (isActive) {
        activeSpecialIds.push(special.romaji);
      }
    });

    setScore(finalScore);
    setMultiplier(finalMultiplier);
    setAnnouncement(currentAnnouncement);
    setActiveSpecials(activeSpecialIds);
  }, [selectedCard]);

  const handlePlaySelected = () => {
    if (selectedCard.length > 0) {
      const newHand = currentHand.filter(
        (card) => !selectedCard.includes(card)
      );

      const cardsNeeded = 8 - newHand.length;
      const newCards = currentDeck.slice(0, cardsNeeded);
      const newDeck = currentDeck.slice(cardsNeeded);

      const sortedHand = [...newHand, ...newCards].sort((a, b) => {
        if (parseInt(a.rank) < parseInt(b.rank)) return -1;
        if (parseInt(a.rank) > parseInt(b.rank)) return 1;
        return 0;
      });

      // Calculate new progress
      const newProgress = progress + score * multiplier;
      const newTurns = turns - 1;
      const target = isEndlessMode
        ? endlessTarget
        : kanaMissions.find((mission) => mission.id === missionID)?.target;

      // Check win condition
      if (newProgress >= target && newTurns >= 0) {
        // Calculate rewards
        setActiveSpecials([]);
        const remainingYen = newTurns * 100;
        const winBonus = 500;
        const totalYen = yen + winBonus + remainingYen;
        const xpGain = 20;
        playSound("WIN");
        // Count wins for turn 8 and beyond
        const shouldCountWin = missionID >= 8;

        // Batch all updates
        Promise.all([
          updatePlayerInfoServer({
            id: info.id,
            xp: info.xp + xpGain,
            wins: info.wins + (shouldCountWin ? 1 : 0),
          }),
          shouldCountWin &&
            updateActivityServer({
              highest_score: newProgress,
              wins: info.wins + 1,
            }),
          updateXp(xpGain),
          setYen(totalYen),
          updateWins(info.wins + 1),
        ]);
      } else if (newTurns === 0 && newProgress < target) {
        playSound("LOSE");
        updatePlayerInfoServer({
          id: info.id,
          losses: info.losses + 1,
        });
        updateActivityServer({
          highest_score: score * multiplier,
          losses: info.losses + 1,
        });
        updateLosses(info.losses + 1);
      }
      updateActivityServer({ highest_score: newProgress });

      updatePlayerInfoServer({
        id: info.id,
        highest_score: newProgress,
      });

      // Update game state
      setProgress(newProgress);
      setCurrentHand(sortedHand);
      setCurrentDeck(newDeck);
      setScore(0);
      setMultiplier(0);
      setSelectedCard([]);
      setTurns(turns - 1);
      playSound("PLAY");
    } else {
      setWarning("Select cards to play first");
      playSound("ERROR");
    }
  };

  return (
    <ActionButton
      onClick={handlePlaySelected}
      icon={<ArrowUp strokeWidth={1.7} className="w-5 h-5" />}
      descTooltip="Play your hand."
      keyboardShortcut="2"
      className="bg-[#01de5b]"
    />
  );
};
