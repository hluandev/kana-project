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
    discard,
    setTurns,
    setDiscard,
    setAnnouncement,
  } = useScoreStore();

  const checkHand = () => {
    const rankCount = new Map<string, number>();
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

      if (hasStraightFlush) {
        setScore(score + 100);
        setMultiplier(multiplier + 8);
        setAnnouncement("a straight flush!");
      } else if (hasFourOfKind) {
        setScore(score + 60);
        setMultiplier(multiplier + 5);
        setAnnouncement("four of a kind!");
      } else if (hasFullHouse) {
        setScore(score + 40);
        setMultiplier(multiplier + 4);
        setAnnouncement("a full house!");
      } else if (hasStraight) {
        setScore(score + 30);
        setMultiplier(multiplier + 3);
        setAnnouncement("a straight!");
      } else if (hasThreeOfKind) {
        setScore(score + 20);
        setMultiplier(multiplier + 3);
        setAnnouncement("three of a kind!");
      } else if (hasTwoPair) {
        setScore(score + 20);
        setMultiplier(multiplier + 2);
        setAnnouncement("two pairs!");
      } else if (hasPair) {
        setScore(score + 10);
        setMultiplier(multiplier + 2);
        setAnnouncement("one pair!");
      } else if (hasFlush) {
        setAnnouncement("a flush!");
        setScore(score + 40);
        setMultiplier(multiplier + 3);
      } else {
        setAnnouncement("High card!");
        setScore(score + 5);
        setMultiplier(multiplier + 1);
      }
    }
  };

  return (
    <ActionButton
      onClick={handlePlaySelected}
      text="play selected"
      className="bg-blue-700"
    />
  );
};
