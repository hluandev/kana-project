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
  } = useScoreStore();

  const {
    drawHand,
    setSelectedCard,
    currentSpecialDeck,
    setCurrentSpecialDeck,
    addCurrentSpecial,
  } = useKanaStore();

  // Get 3 random cards from kanaSpecial
  const randomSpecialCards = React.useMemo(() => {
    return [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [currentSpecialDeck]);

  const [value, setValue] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const matchingCard = randomSpecialCards.find(
      (card) => card.romaji === value
    );

    if (matchingCard) {
      // Add the special card to current specials
      addCurrentSpecial(matchingCard);

      // Remove the selected card from currentSpecialDeck
      setCurrentSpecialDeck(
        currentSpecialDeck.filter((card) => card.romaji !== value)
      );

      // Reset game state
      setMissionID(missionID + 1);
      setScore(0);
      setTurns(4);
      setProgress(0);
      setDiscard(4);
      setMultiplier(0);
      drawHand();
      setSelectedCard([]);
    }
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
            desc={card.desc}
            key={card.japanese}
            japanese={card.japanese}
            isSelected={card.romaji === value}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
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
