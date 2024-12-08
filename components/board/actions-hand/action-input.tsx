"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
import { useKanaStore } from "@/stores/useKanaStore";
import React from "react";
import { useScoreStore } from "@/stores/useScoreStore";
import { playSound } from "@/actions/client/play-sound";

export default function ActionInput() {
  const [value, setValue] = useState("");
  const { addSelectedCard, currentHand, selectedCard, removeSelectedCard } =
    useKanaStore();
  const { missionID, setWarning } = useScoreStore();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, [missionID]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setValue(inputValue);

    if (["1", "2", "3"].includes(inputValue)) {
      setValue("");
      return;
    }

    const matchedCard = currentHand.find(
      (card) => card.romaji.toLowerCase() === inputValue
    );

    if (matchedCard) {
      const isAlreadySelected = selectedCard.some(
        (card) => card.romaji === matchedCard.romaji
      );

      if (isAlreadySelected) {
        playSound("DESELECT");
        removeSelectedCard(matchedCard);
      } else if (selectedCard.length < 5) {
        playSound("SELECT");
        addSelectedCard(matchedCard);
      } else {
        playSound("ERROR");
        setWarning("You can only select up to 5 cards");
      }
      setValue("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex items-center"
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Type here"
        className="text-center w-52 h-8 bg-white text-sm placeholder:text-neutral-400 outline-none rounded-md"
        onChange={handleChange}
      />
      <input className="hidden" type="submit" />
    </form>
  );
}
