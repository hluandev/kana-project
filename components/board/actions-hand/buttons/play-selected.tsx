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
  } = useScoreStore();

  const hasPair = () => {
    const rankCount = new Map<string, number>();

    selectedCard.forEach((card) => {
      const count = rankCount.get(card.rank) || 0;
      rankCount.set(card.rank, count + 1);
    });

    return Array.from(rankCount.values()).some((count) => count >= 2);
  };

  const handlePlaySelected = () => {
    if (hasPair()) {
      const newHand = currentHand.filter(
        (card) => !selectedCard.includes(card)
      );

      const cardsNeeded = 8 - newHand.length;
      const newCards = currentDeck.slice(0, cardsNeeded);
      const newDeck = currentDeck.slice(cardsNeeded);

      setCurrentHand([...newHand, ...newCards]);
      setCurrentDeck(newDeck);
      setSelectedCard([]);
      setTurns(turns - 1);
      console.log("Found a pair");
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
