import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";
import React, { FormEvent } from "react";
import { ActionButton } from "../board/actions-hand/buttons/action-button";

export const Win = () => {
  const {
    missionID,
    setMissionID,
    setScore,
    setMultiplier,
    setTurns,
    setDiscard,
    setProgress,
    yen,
    setYen,
  } = useScoreStore();

  const {
    drawHand,
    setSelectedCard,
    currentSpecialDeck,
    setCurrentSpecialDeck,
    currentSpecial,
    addSelectedSpecial,
    setCurrentSpecial,
    removeSelectedSpecial,
    setSelectedSpecial,
    selectedSpecial,
  } = useKanaStore();

  const [randomSpecialCards, setRandomSpecialCards] = React.useState(() =>
    [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 3)
  );

  // This will only run once when the component mounts
  React.useEffect(() => {
    setRandomSpecialCards(
      [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 3)
    );
  }, []);

  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [missionID]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    const matchingCard = randomSpecialCards.find(
      (card) => card.romaji === e.target.value
    );

    const matchingSpecial = currentSpecial.find(
      (card) => card.romaji.toLowerCase() === e.target.value
    );

    if (matchingSpecial) {
      const isAlreadySelected = selectedSpecial.some(
        (card) => card.romaji === matchingSpecial.romaji
      );

      if (isAlreadySelected) {
        removeSelectedSpecial(matchingSpecial);
      } else if (selectedSpecial.length < 3) {
        addSelectedSpecial(matchingSpecial);
      }
      setValue("");
    }

    if (matchingCard) {
      const isAlreadySelected = selectedSpecial.some(
        (card) => card.romaji === matchingCard.romaji
      );

      if (isAlreadySelected) {
        removeSelectedSpecial(matchingCard);
      } else if (selectedSpecial.length < 3) {
        addSelectedSpecial(matchingCard);
      }
      setValue("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const totalCost = selectedSpecial.reduce(
      (sum, card) => sum + card.price,
      0
    );

    if (yen >= totalCost && selectedSpecial.length > 0) {
      const newSpecialCards = [...currentSpecial, ...selectedSpecial];
      setCurrentSpecial(newSpecialCards);

      const newSpecialDeck = currentSpecialDeck.filter((card) => {
        const isSelected = selectedSpecial.some(
          (selected) => selected.romaji === card.romaji
        );
        const isUpgrade = selectedSpecial.some(
          (selected) =>
            selected.romaji === card.romaji && selected.condition === "upgrade"
        );
        return !isSelected || isUpgrade;
      });
      setCurrentSpecialDeck(newSpecialDeck);

      setYen(yen - totalCost);
    }

    drawHand();
    setMissionID(missionID + 1);
    setTurns(4);
    setDiscard(4);
    setSelectedCard([]);

    setTimeout(() => {
      setSelectedSpecial([]);
      setMultiplier(0);
      setScore(0);
      setProgress(0);
    }, 100);
  };

  const handleSellSpecial = () => {
    if (selectedSpecial.length === 0) return;

    // Filter out selected cards from currentSpecial
    const newCurrentSpecial = currentSpecial.filter(
      (card) =>
        !selectedSpecial.some((selected) => selected.romaji === card.romaji)
    );

    // Add sold cards back to the special deck
    const newSpecialDeck = [...currentSpecialDeck, ...selectedSpecial];

    // Calculate yen to add (500 per card)
    const yenToAdd = selectedSpecial.length * 500;

    // Update the stores
    setCurrentSpecial(newCurrentSpecial);
    setCurrentSpecialDeck(newSpecialDeck);
    setSelectedSpecial([]);
    setYen(yen + yenToAdd);
  };

  return (
    <div className="fixed bg-black/50 backdrop-blur-xl w-full flex-col gap-8 h-full flex justify-center items-center z-40">
      <div className="text-yellow-600 text-8xl mt-52">You Defeated</div>

      <p className="text-2xl">
        Select a special card to enchance the next rounds
      </p>
      <div className="h-96 grid grid-cols-3 gap-6 w-[40%] p-6 bg-white/50 border border-white/40 rounded-lg">
        {randomSpecialCards.map((card) => (
          <SpecialCard
            price={card.price}
            desc={card.desc}
            key={card.japanese}
            japanese={card.japanese}
            romaji={card.romaji}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type the romaji of the special card"
          className="bg-transparent text-center outline-none border rounded-md py-2 px-4"
        />
        <div className="flex gap-3">
          <ActionButton
            onClick={handleSellSpecial}
            text="Sell Special (3)"
            keyboardShortcut="3"
            className="bg-yellow-600/20 text-yellow-200 hover:bg-yellow-600/40"
          />
          <input
            type="submit"
            value="Next match"
            className="bg-yellow-600 px-4 py-2 font-bold rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
