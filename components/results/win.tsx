import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";
import React from "react";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import {
  ArrowRightIcon,
  JapaneseYenIcon,
  RefreshCcwIcon,
  RefreshCwIcon,
  ShoppingCartIcon,
  SnowflakeIcon,
} from "lucide-react";
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
    setWarning,
    reroll,
    setReroll,
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
    frozenSpecialCards,
    setFrozenSpecialCards,
    addFrozenSpecialCard,
  } = useKanaStore();

  const [randomSpecialCards, setRandomSpecialCards] = React.useState(() =>
    [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 4)
  );

  // This will only run once when the component mounts
  React.useEffect(() => {
    setRandomSpecialCards(
      [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 4)
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

    // If we already have selected special cards from currentSpecial
    if (
      selectedSpecial.length > 0 &&
      currentSpecial.some((card) => card.romaji === selectedSpecial[0].romaji)
    ) {
      // Check if input is a number 5-9 for reordering
      const input = parseInt(e.target.value);
      if (!isNaN(input) && input >= 5 && input <= 9) {
        const targetIndex = input - 5; // Convert 5-9 to 0-4
        if (targetIndex < currentSpecial.length) {
          const selectedCardIndex = currentSpecial.findIndex(
            (card) => card.romaji === selectedSpecial[0].romaji
          );

          if (selectedCardIndex !== -1) {
            handleReorderSpecial(selectedCardIndex, targetIndex);
            setSelectedSpecial([]);
            setValue("");
            return;
          }
        }
      }

      // Existing card selection logic
      const matchingSpecial = currentSpecial.find(
        (card) => card.romaji.toLowerCase() === e.target.value
      );

      if (matchingSpecial) {
        const isAlreadySelected = selectedSpecial.some(
          (card) => card.romaji === matchingSpecial.romaji
        );

        if (isAlreadySelected) {
          removeSelectedSpecial(matchingSpecial);
          playSound("/audio/deselect_card.wav");
        } else if (selectedSpecial.length < 3) {
          addSelectedSpecial(matchingSpecial);
          playSound("/audio/select_card.wav");
        }
        setValue("");
      }
      return;
    }

    // If we already have selected cards from randomSpecialCards
    if (selectedSpecial.length > 0) {
      const matchingCard = randomSpecialCards.find(
        (card) => card.romaji.toLowerCase() === e.target.value
      );

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
      return;
    }

    // If no cards are selected yet, determine the source of the first selection
    const matchingCard = randomSpecialCards.find(
      (card) => card.romaji.toLowerCase() === e.target.value
    );
    const matchingSpecial = currentSpecial.find(
      (card) => card.romaji.toLowerCase() === e.target.value
    );

    // Only allow selection from one source
    if (matchingSpecial) {
      addSelectedSpecial(matchingSpecial);
      playSound("/audio/select_card.wav");
      setValue("");
    } else if (matchingCard) {
      addSelectedSpecial(matchingCard);
      playSound("/audio/select_card.wav");
      setValue("");
    }
  };

  const handleReorderSpecial = (fromIndex: number, toIndex: number) => {
    if (
      fromIndex < 0 ||
      fromIndex >= currentSpecial.length ||
      toIndex < 0 ||
      toIndex >= currentSpecial.length
    ) {
      return;
    }

    const newSpecialCards = [...currentSpecial];
    const [movedItem] = newSpecialCards.splice(fromIndex, 1);
    newSpecialCards.splice(toIndex, 0, movedItem);

    setCurrentSpecial(newSpecialCards);
    playSound("/audio/select_card.wav");
  };

  const handleFreezeCard = () => {
    if (selectedSpecial.length === 0) {
      setWarning("Select cards to freeze first");
      playSound("/audio/error.wav");
      return;
    }

    // Only allow freezing cards from randomSpecialCards
    const selectedFromRandom = selectedSpecial.every((card) =>
      randomSpecialCards.some((randomCard) => randomCard.romaji === card.romaji)
    );

    if (!selectedFromRandom) {
      setWarning("You can only freeze cards from the shop");
      playSound("/audio/error.wav");
      return;
    }

    // Add selected cards to frozen cards
    selectedSpecial.forEach((card) => addFrozenSpecialCard(card));

    // Don't remove frozen cards from random cards anymore
    setSelectedSpecial([]);
    setValue("");
    playSound("/audio/freeze.wav");
  };

  const handleSubmit = () => {
    const totalCost = selectedSpecial.reduce(
      (sum, card) => sum + card.price,
      0
    );

    // Check if adding new cards would exceed the 5-card limit
    if (currentSpecial.length + selectedSpecial.length > 5) {
      setWarning("You can only have 5 special cards at a time");
      playSound("/audio/error.wav");
      return;
    }

    // Check if any selected card is from currentSpecial
    const hasCurrentSpecialCard = selectedSpecial.some((card) =>
      currentSpecial.some((special) => special.romaji === card.romaji)
    );

    if (hasCurrentSpecialCard) {
      // If card is from currentSpecial, don't charge yen
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

      // Update states without changing yen
      setCurrentSpecialDeck(newSpecialDeck);
      setCurrentSpecial(newSpecialCards);
      setSelectedSpecial([]);
      setValue("");
    } else if (yen >= totalCost) {
      // Original logic for purchasing new cards
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

      const newSpecialCards = Array.from(
        new Set([...currentSpecial, ...selectedSpecial])
      );

      // Remove purchased cards from randomSpecialCards
      const newRandomSpecialCards = randomSpecialCards.filter(
        (card) =>
          !selectedSpecial.some((selected) => selected.romaji === card.romaji)
      );

      setCurrentSpecialDeck(newSpecialDeck);
      setCurrentSpecial(newSpecialCards);
      setRandomSpecialCards(newRandomSpecialCards);
      setYen(yen - totalCost);
      setSelectedSpecial([]);
      setValue("");
      playSound("/audio/buy.wav");
    } else {
      setWarning("You don't have enough yen");
      playSound("/audio/error.wav");
    }
  };

  const handleNextTurn = () => {
    // Keep frozen cards and add new random cards to fill remaining slots
    const newRandomCards = [
      ...currentSpecialDeck
        .filter(
          (card) =>
            !frozenSpecialCards.some((frozen) => frozen.romaji === card.romaji)
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 4 - frozenSpecialCards.length),
    ];

    // Combine frozen cards with new random cards
    setRandomSpecialCards([...frozenSpecialCards, ...newRandomCards]);
    setFrozenSpecialCards([]); // Clear frozen cards for next turn
    drawHand();
    setMissionID(missionID + 1);
    setTurns(4);
    setDiscard(4);
    setSelectedCard([]);
    playSound("/audio/next_turn.wav");

    setTimeout(() => {
      setMultiplier(0);
      setScore(0);
      setProgress(0);
    }, 100);
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

  const handleRefreshCards = () => {
    if (yen >= 200) {
      setRandomSpecialCards(
        [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 4)
      );
      setYen(yen - 200);
      setReroll(reroll + 1);
      setSelectedSpecial([]);
      playSound("/audio/reroll.wav");
    } else {
      setWarning("You need 200 yen to refresh cards");
      playSound("/audio/error.wav");
    }
  };

  return (
    <div className="w-[56rem] relative flex flex-col items-center z-10">
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
      <div className="h-80 relative grid mt-10 grid-cols-4 gap-4 p-4 bg-white/50 rounded-2xl">
        {randomSpecialCards.map((card) => (
          <SpecialCard
            japanese_katakana={card.japanese_katakana}
            card={card}
            price={card.price}
            desc={card.desc}
            key={card.japanese}
            japanese={card.japanese}
            romaji={card.romaji}
            isFrozen={frozenSpecialCards.some(
              (frozenCard) => frozenCard.romaji === card.romaji
            )}
          />
        ))}

        <div className="absolute -right-16 top-0 space-y-2">
          {/* Reroll */}
          <div
            onClick={handleRefreshCards}
            className="bg-white p-2 cursor-pointer group text-xl font-medium rounded-full aspect-square w-14 flex items-center justify-center"
          >
            <RefreshCwIcon className="group-hover:animate-spin" />
          </div>

          {/* Freeze */}
          <div
            onClick={handleFreezeCard}
            className="bg-white p-2 cursor-pointer group text-xl font-medium rounded-full aspect-square w-14 flex items-center justify-center"
          >
            <SnowflakeIcon className="" />
          </div>

          <div className=" bg-white p-2 text-xl font-medium rounded-full aspect-square w-14 flex items-center justify-center">
            {currentSpecialDeck.length}
          </div>
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
          className="flex text-center outline-none rounded-md"
        />
        {/* <input
          type="submit"
          value="N"
          className="bg-yellow-600 px-4 py-2 font-bold rounded-full w-12 aspect-square"
        /> */}

        <ActionButton
          onClick={selectedSpecial.length > 0 ? handleSubmit : handleNextTurn}
          icon={
            selectedSpecial.length > 0 ? (
              <ShoppingCartIcon />
            ) : (
              <ArrowRightIcon />
            )
          }
          keyboardShortcut="2"
          className="bg-[#EFCB68]  hover:bg-yellow-600/40"
        />
      </form>
    </div>
  );
};
