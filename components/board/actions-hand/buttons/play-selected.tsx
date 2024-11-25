import { useKanaStore } from "@/stores/useKanaStore";
import { ActionButton } from "./action-button";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";
import { useComboStore } from "@/stores/useComboStore";

export const PlaySelected = () => {
  const {
    selectedCard,
    currentHand,
    currentDeck,
    setCurrentHand,
    setCurrentDeck,
    setSelectedCard,
    currentSpecial,
  } = useKanaStore();
  const {
    score,
    multiplier,
    setScore,
    setMultiplier,
    turns,
    setTurns,
    announcement,
    setAnnouncement,
    progress,
    setProgress,
  } = useScoreStore();

  const {
    highCard,
    pair,
    twoPairs,
    threeOfAKind,
    straight,
    flush,
    fullHouse,
    fourOfAKind,
    straightFlush,
    increaseHighCard,
    increasePair,
    increaseTwoPairs,
    increaseThreeOfAKind,
    increaseStraight,
    increaseFlush,
    increaseFullHouse,
    increaseFourOfAKind,
    increaseStraightFlush,
  } = useComboStore();

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
    if (selectedCard.length > 0) {
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
        newScore = straightFlush.score + rankPoints;
        newMultiplier = straightFlush.multiplier;
        setAnnouncement("straight_flush");
      } else if (hasFourOfKind) {
        const fourKindRank = Array.from(rankCount.entries()).find(
          ([_, count]) => count === 4
        )?.[0];
        rankPoints = fourKindRank ? parseInt(fourKindRank) * 4 : 0;
        newScore = fourOfAKind.score + rankPoints;
        newMultiplier = fourOfAKind.multiplier;
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
        newScore = fullHouse.score + rankPoints;
        newMultiplier = fullHouse.multiplier;
        setAnnouncement("full_house");
      } else if (hasStraight) {
        rankPoints = cardRanks
          .sort((a, b) => b - a)
          .slice(0, 5)
          .reduce((sum, rank) => sum + rank, 0);
        newScore = straight.score + rankPoints;
        newMultiplier = straight.multiplier;
        setAnnouncement("straight");
      } else if (hasFlush) {
        rankPoints = cardRanks
          .sort((a, b) => b - a)
          .slice(0, 5)
          .reduce((sum, rank) => sum + rank, 0);
        newScore = flush.score + rankPoints;
        newMultiplier = flush.multiplier;
        setAnnouncement("flush");
      } else if (hasThreeOfKind) {
        const threeKindRank = Array.from(rankCount.entries()).find(
          ([_, count]) => count === 3
        )?.[0];
        rankPoints = threeKindRank ? parseInt(threeKindRank) * 3 : 0;
        newScore = threeOfAKind.score + rankPoints;
        newMultiplier = threeOfAKind.multiplier;
        setAnnouncement("three_of_a_kind");
      } else if (hasTwoPair) {
        const pairRanks = Array.from(rankCount.entries())
          .filter(([_, count]) => count === 2)
          .map(([rank, _]) => parseInt(rank));
        rankPoints = pairRanks.reduce((sum, rank) => sum + rank * 2, 0);
        newScore = twoPairs.score + rankPoints;
        newMultiplier = twoPairs.multiplier;
        setAnnouncement("two_pairs");
      } else if (hasPair) {
        const pairRank = Array.from(rankCount.entries()).find(
          ([_, count]) => count === 2
        )?.[0];
        rankPoints = pairRank ? parseInt(pairRank) * 2 : 0;
        newScore = pair.score + rankPoints;
        newMultiplier = pair.multiplier;
        setAnnouncement("pair");
      } else {
        rankPoints = Math.max(...cardRanks);
        newScore = highCard.score + rankPoints;
        newMultiplier = highCard.multiplier;
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

      currentSpecial.forEach((special) => {
        // Base multiplier effects
        if (special.combo === "none" && special.condition === "multiples") {
          finalMultiplier += special.reward;
        }

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
          validCombos.push(
            "full_house",
            "three_of_a_kind",
            "pair",
            "two_pairs"
          );
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

        console.log(validCombos);

        // Apply multiplier effects
        if (
          validCombos.includes(special.combo) &&
          special.condition === "multiples"
        ) {
          finalMultiplier += special.reward;
        }

        // Apply multiplier multiplication effects
        if (
          validCombos.includes(special.combo) &&
          special.condition === "xmultiples"
        ) {
          finalMultiplier *= special.reward;
        }

        // Apply base point effects
        if (special.combo === "none" && special.condition === "points") {
          finalScore += special.reward;
        }

        // Apply point effects for specific combinations
        if (
          validCombos.includes(special.combo) &&
          special.condition === "points"
        ) {
          finalScore += special.reward;
        }
      });

      // Apply upgrade effects for combinations
      currentSpecial.forEach((special) => {
        if (special.condition === "upgrade") {
          switch (special.combo) {
            case "high_card":
              increaseHighCard();
              break;
            case "pair":
              increasePair();
              break;
            case "two_pairs":
              increaseTwoPairs();
              break;
            case "three_of_a_kind":
              increaseThreeOfAKind();
              break;
            case "straight":
              increaseStraight();
              break;
            case "flush":
              increaseFlush();
              break;
            case "full_house":
              increaseFullHouse();
              break;
            case "four_of_a_kind":
              increaseFourOfAKind();
              break;
            case "straight_flush":
              increaseStraightFlush();
              break;
          }
        }
      });

      console.log(currentSpecial);

      setScore(finalScore);
      setMultiplier(finalMultiplier);
      setAnnouncement(currentAnnouncement);
    } else {
      setAnnouncement("");
      setScore(0);
      setMultiplier(0);
    }
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

      setProgress(progress + score * multiplier);

      setCurrentHand(sortedHand);
      setCurrentDeck(newDeck);
      setScore(0);
      setMultiplier(0);
      setSelectedCard([]);
      setTurns(turns - 1);
    }
  };

  return (
    <ActionButton
      onClick={handlePlaySelected}
      text="Play (3)"
      className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/40"
      keyboardShortcut="3"
    />
  );
};
