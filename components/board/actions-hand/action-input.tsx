"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
import { useKanaStore } from "@/stores/useKanaStore";
import React from "react";
import { useScoreStore } from "@/stores/useScoreStore";
import { playSound } from "@/actions/client/play-sound";
import { useIsMobile } from "@/hooks/useIsMobile";
import { VirtualKeyboard } from "./virtual-keyboard";
import { DeleteIcon } from "lucide-react";

export default function ActionInput() {
  const [value, setValue] = useState("");
  const { addSelectedCard, currentHand, selectedCard, removeSelectedCard } =
    useKanaStore();
  const { missionID, setWarning } = useScoreStore();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, [missionID]);

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.MouseEvent<HTMLButtonElement>
    ) => {
      const inputValue =
        "value" in e.target
          ? e.target.value.toLowerCase()
          : e.currentTarget.getAttribute("data-value")?.toLowerCase() || "";
      const newValue = e.type === "click" ? value + inputValue : inputValue;
      setValue(newValue);

      if (["1", "2", "3"].includes(newValue)) {
        setValue("");
        return;
      }

      const matchedCard = currentHand.find(
        (card) => card.romaji.toLowerCase() === newValue
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
    },
    [
      value,
      currentHand,
      selectedCard,
      addSelectedCard,
      removeSelectedCard,
      setWarning,
    ]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex items-center relative"
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={isMobile ? "Choose text below" : "Type here"}
        readOnly={isMobile}
        className="text-center w-full lg:w-52 lg:h-8 bg-white text-xs lg:text-sm placeholder:text-neutral-400 outline-none rounded-md"
        onChange={handleChange}
      />

      <input className="hidden" type="submit" />

      <div
        onClick={() => setValue(value.slice(0, -1))}
        className="lg:hidden absolute -right-16  top-1/2 -translate-y-1/2 bg-white rounded-xl border border-black/10 shadow-sm p-1.5"
      >
        <DeleteIcon className="w-4 h-4" />
      </div>

      <VirtualKeyboard
        handleChange={(value) => {
          handleChange({
            type: "click",
            currentTarget: { getAttribute: () => value },
            target: { value },
          } as any);
        }}
        value={value}
      />
    </form>
  );
}
