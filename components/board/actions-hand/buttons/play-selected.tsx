import { useKanaStore } from "@/stores/useKanaStore";
import { ActionButton } from "./action-button";
import { useScoreStore } from "@/stores/useScoreStore";

export const PlaySelected = () => {
  const {
    selectedCard,
    currentHand,
    currentDeck,
    setCurrentHand,
    setCurrentDeck,
    setSelectedCard,
  } = useKanaStore();
  const {
    score,
    multiplier,
    setScore,
    setMultiplier,
    turns,
    setTurns,
    setAnnouncement,
    progress,
    setProgress,
  } = useScoreStore();

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

  const handlePlaySelected = () => {
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

    if (
      hasPair ||
      hasTwoPair ||
      hasThreeOfKind ||
      hasStraight ||
      hasFlush ||
      hasFullHouse ||
      hasFourOfKind ||
      hasStraightFlush ||
      selectedCard.length > 0
    ) {
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

      setCurrentHand(sortedHand);
      setCurrentDeck(newDeck);
      setSelectedCard([]);
      setTurns(turns - 1);

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
        setAnnouncement("a straight flush!");
      } else if (hasFourOfKind) {
        const fourKindRank = Array.from(rankCount.entries()).find(
          ([_, count]) => count === 4
        )?.[0];
        rankPoints = fourKindRank ? parseInt(fourKindRank) * 4 : 0;
        newScore = 60 + rankPoints;
        newMultiplier = 5;
        setAnnouncement("four of a kind!");
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
        setAnnouncement("a full house!");
      } else if (hasStraight) {
        rankPoints = cardRanks
          .sort((a, b) => b - a)
          .slice(0, 5)
          .reduce((sum, rank) => sum + rank, 0);
        newScore = 30 + rankPoints;
        newMultiplier = 3;
        setAnnouncement("a straight!");
      } else if (hasFlush) {
        rankPoints = cardRanks
          .sort((a, b) => b - a)
          .slice(0, 5)
          .reduce((sum, rank) => sum + rank, 0);
        newScore = 40 + rankPoints;
        newMultiplier = 3;
        setAnnouncement("a flush!");
      } else if (hasThreeOfKind) {
        const threeKindRank = Array.from(rankCount.entries()).find(
          ([_, count]) => count === 3
        )?.[0];
        rankPoints = threeKindRank ? parseInt(threeKindRank) * 3 : 0;
        newScore = 20 + rankPoints;
        newMultiplier = 3;
        setAnnouncement("three of a kind!");
      } else if (hasTwoPair) {
        const pairRanks = Array.from(rankCount.entries())
          .filter(([_, count]) => count === 2)
          .map(([rank, _]) => parseInt(rank));
        rankPoints = pairRanks.reduce((sum, rank) => sum + rank * 2, 0);
        newScore = 20 + rankPoints;
        newMultiplier = 2;
        setAnnouncement("two pairs!");
      } else if (hasPair) {
        const pairRank = Array.from(rankCount.entries()).find(
          ([_, count]) => count === 2
        )?.[0];
        rankPoints = pairRank ? parseInt(pairRank) * 2 : 0;
        newScore = 10 + rankPoints;
        newMultiplier = 2;
        setAnnouncement("one pair!");
      } else {
        rankPoints = Math.max(...cardRanks);
        newScore = 5 + rankPoints;
        newMultiplier = 1;
        setAnnouncement("High card!");
      }

      setScore(newScore);
      setMultiplier(newMultiplier);
      setProgress(progress + newScore * newMultiplier);
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
