import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";
import React from "react";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import { ArrowRightIcon, JapaneseYenIcon } from "lucide-react";
import { playSound } from "@/actions/client/play-sound";
import { motion } from "framer-motion";
import { usePlayerStore } from "@/stores/usePlayerStore";

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

  React.useEffect(() => {
    const playSound = () => {
      const audio = new Audio("/audio/win.wav");
      audio.volume = 0.5;
      audio.play();
    };

    playSound();
  }, []);

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
        playSound("/audio/deselect_card.wav");
      } else if (selectedSpecial.length < 3) {
        addSelectedSpecial(matchingCard);
        playSound("/audio/select_card.wav");
      }
      setValue("");
    }
  };

  const handleSubmit = () => {
    const totalCost = selectedSpecial.reduce(
      (sum, card) => sum + card.price,
      0
    );

    if (yen >= totalCost && selectedSpecial.length > 0) {
      // Create new arrays instead of modifying existing ones
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

      // Create a new array for special cards, ensuring no duplicates
      const newSpecialCards = Array.from(
        new Set([...currentSpecial, ...selectedSpecial])
      );

      // Batch the state updates
      setCurrentSpecialDeck(newSpecialDeck);
      setCurrentSpecial(newSpecialCards);
      setYen(yen - totalCost);
      setSelectedSpecial([]);

      // Reset game state
      drawHand();
      setMissionID(missionID + 1);
      setTurns(4);
      setDiscard(4);
      setSelectedCard([]);
      playSound("/audio/next_turn.wav");

      // Reset score-related states with a slight delay
      setTimeout(() => {
        setMultiplier(0);
        setScore(0);
        setProgress(0);
      }, 100);
    }
  };

  const handleSellSpecial = () => {
    // Check if there are selected cards and they exist in currentSpecial
    const selectedCardsInCurrent = selectedSpecial.every((card) =>
      currentSpecial.some((current) => current.romaji === card.romaji)
    );

    if (selectedSpecial.length === 0 || !selectedCardsInCurrent) {
      setValue("");
      return;
    }

    // Filter out selected cards from currentSpecial
    const newCurrentSpecial = currentSpecial.filter(
      (card) =>
        !selectedSpecial.some((selected) => selected.romaji === card.romaji)
    );

    // Add sold cards back to the special deck
    const newSpecialDeck = [...currentSpecialDeck, ...selectedSpecial];

    // Calculate yen to add (300 per card)
    const yenToAdd = selectedSpecial.length * 300;

    // Update the stores
    setCurrentSpecial(newCurrentSpecial);
    setCurrentSpecialDeck(newSpecialDeck);
    setSelectedSpecial([]);
    setYen(yen + yenToAdd);
    setValue("");
  };

  return (
    <div className="w-[42rem] relative flex flex-col items-center z-10">
      <motion.div
        className="text-yellow-600 font-medium text-6xl"
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        You Defeated
      </motion.div>

      <p className="text-xl mt-4 font-medium">
        Buy or sell special cards to enchance the next round
      </p>
      <div className="h-80 relative grid mt-10 grid-cols-3 gap-4 p-4 bg-white/50 rounded-2xl">
        {randomSpecialCards.map((card) => (
          <SpecialCard
            card={card}
            price={card.price}
            desc={card.desc}
            key={card.japanese}
            japanese={card.japanese}
            romaji={card.romaji}
          />
        ))}

        <div className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white p-2 text-xl font-medium rounded-full aspect-square w-14 flex items-center justify-center">
          {currentSpecialDeck.length}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex bg-white h-full mt-10 rounded-full p-2"
      >
        <ActionButton
          onClick={handleSellSpecial}
          icon={<JapaneseYenIcon />}
          keyboardShortcut="1"
          className="bg-[#EFCB68]  hover:bg-yellow-600/40"
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type here"
          className="flex   text-center outline-none rounded-md"
        />
        {/* <input
          type="submit"
          value="N"
          className="bg-yellow-600 px-4 py-2 font-bold rounded-full w-12 aspect-square"
        /> */}

        <ActionButton
          onClick={handleSubmit}
          icon={<ArrowRightIcon />}
          keyboardShortcut="2"
          className="bg-[#EFCB68]  hover:bg-yellow-600/40"
        />
      </form>
    </div>
  );
};
