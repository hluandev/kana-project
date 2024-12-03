"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { ActionButton } from "./action-button";
import { useScoreStore } from "@/stores/useScoreStore";
import { XIcon } from "lucide-react";
import { playSound } from "@/actions/client/play-sound";

export const DiscardSelected = () => {
  const {
    currentHand,
    selectedCard,
    currentDeck,
    setCurrentHand,
    setCurrentDeck,
    setSelectedCard,
  } = useKanaStore();

  const { discard, setDiscard, setScore, setMultiplier, setWarning } =
    useScoreStore();

  const onHandleDiscard = () => {
    if (selectedCard.length === 0) {
      setWarning("Select cards to discard first");
      playSound("/audio/error.mp3");
      return;
    }

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
      playSound("/audio/discard.mp3");
    } else {
      setWarning("You can't discard anymore cards");
      playSound("/audio/error.mp3");
    }
  };

  return (
    <ActionButton
      onClick={onHandleDiscard}
      icon={<XIcon strokeWidth={2.5} />}
      keyboardShortcut="1"
      className="bg-[#e4e4e6]"
    />
  );
};
