"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { ActionButton } from "./action-button";
import { useScoreStore } from "@/stores/useScoreStore";

export const DiscardSelected = () => {
  const {
    currentHand,
    selectedCard,
    currentDeck,
    setCurrentHand,
    setCurrentDeck,
    setSelectedCard,
  } = useKanaStore();

  const { discard, setDiscard, setScore, setMultiplier } = useScoreStore();

  const onHandleDiscard = () => {
    const newHand = currentHand.filter((card) => !selectedCard.includes(card));

    const cardsNeeded = 8 - newHand.length;
    const newCards = currentDeck.slice(0, cardsNeeded);
    const newDeck = currentDeck.slice(cardsNeeded);

    const sortedHand = [...newHand, ...newCards].sort((a, b) => {
      if (parseInt(a.rank) < parseInt(b.rank)) return -1;
      if (parseInt(a.rank) > parseInt(b.rank)) return 1;
      return 0;
    });

    if (discard > 0) {
      setCurrentHand(sortedHand);
      setCurrentDeck(newDeck);
      setSelectedCard([]);
      setScore(0);
      setMultiplier(0);
      setDiscard(discard - 1);
    }
  };

  return (
    <ActionButton
      onClick={onHandleDiscard}
      text="Discard"
      className="bg-red-600/90 text-red-100 hover:bg-red-600/40"
      keyboardShortcut="1"
    />
  );
};
