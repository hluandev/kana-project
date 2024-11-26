"use client";

import { ChangeEventHandler, useState } from "react";
import { useKanaStore } from "@/stores/useKanaStore";
import React from "react";
import { useScoreStore } from "@/stores/useScoreStore";

export default function ActionInput() {
  const [value, setValue] = useState("");
  const { addSelectedCard, currentHand, selectedCard, removeSelectedCard } =
    useKanaStore();
  const { missionID } = useScoreStore();
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
        removeSelectedCard(matchedCard);
      } else if (selectedCard.length < 5) {
        addSelectedCard(matchedCard);
      }
      setValue("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action=""
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Type in card's name that you want to play"
        className="w-full text-center font-mono placeholder:text-base text-lg bg-transparent border placeholder:text-neutral-400 outline-none border-neutral-400 rounded-md p-4"
        onChange={handleChange}
      />
      <input className="hidden" type="submit" />
    </form>
  );
}
