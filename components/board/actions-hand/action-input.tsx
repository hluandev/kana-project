"use client";

import { ChangeEventHandler, useState } from "react";
import { useKanaStore } from "@/stores/useKanaStore";

export default function ActionInput() {
  const [value, setValue] = useState("");
  const { addSelectedCard, currentHand, selectedCard } = useKanaStore();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setValue(inputValue);

    const matchedCard = currentHand.find(
      (card) => card.romaji.toLowerCase() === inputValue
    );

    if (matchedCard && selectedCard.length < 5) {
      addSelectedCard(matchedCard);
      setValue("");
    }
  };

  return (
    <form action="">
      <input
        type="text"
        value={value}
        placeholder="Type in card's name that you want to play"
        className="w-full text-center text-lg bg-transparent border placeholder:text-neutral-600 outline-none border-neutral-700 rounded-md p-4"
        onChange={handleChange}
      />
      <input className="hidden" type="submit" />
    </form>
  );
}
