"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
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

  const playSound = useCallback((sound: string) => {
    if (sound) {
      const audio = new Audio(sound);
      audio.volume = 0.5;
      audio
        .play()
        .catch((error) => console.log("Audio playback failed:", error));
    }
  }, []);

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
        playSound("/audio/deselect_card.mp3");
      } else if (selectedCard.length < 5) {
        addSelectedCard(matchedCard);
        playSound("/audio/select_card.mp3");
      }
      setValue("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="h-full"
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Type here"
        className=" text-center w-52 h-full text-[0.9rem] placeholder:text-neutral-400 outline-none rounded-md"
        onChange={handleChange}
      />
      <input className="hidden" type="submit" />
    </form>
  );
}
