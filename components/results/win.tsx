import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";
import React, { FormEvent } from "react";

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

  // Get 3 random cards from kanaSpecial
  const randomSpecialCards = React.useMemo(() => {
    return [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [currentSpecialDeck]);

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

    if (matchingCard) {
      const isAlreadySelected = selectedSpecial.some(
        (card) => card.romaji === matchingCard.romaji
      );
      const isAlreadyInCurrent = currentSpecial.some(
        (card) => card.romaji === matchingCard.romaji
      );

      if (isAlreadySelected) {
        removeSelectedSpecial(matchingCard);
      } else if (!isAlreadyInCurrent && selectedSpecial.length < 3) {
        addSelectedSpecial(matchingCard);
      }
      setValue("");
    }

    console.log(selectedSpecial);
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
    setSelectedSpecial([]);

    setMultiplier(0);
    setScore(0);
    setProgress(0);
  };

  return (
    <div className="fixed bg-black/40 backdrop-blur-lg w-full flex-col gap-8 h-full flex justify-center items-center z-10">
      <div className="text-yellow-600 text-8xl">You Defeated</div>

      <p className="text-2xl">
        Select a special card to enchance the next rounds
      </p>
      <div className="h-96 grid grid-cols-3 gap-6 w-[40%] p-6 bg-[#1e2022] border border-[#2e3032] rounded-lg">
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

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type the romaji of the special card"
          className="bg-transparent text-center outline-none border rounded-md py-2 px-4"
        />
        <input
          type="submit"
          value="Next match"
          className="bg-yellow-600 px-4 py-2 font-bold rounded-md"
        />
      </form>
    </div>
  );
};
