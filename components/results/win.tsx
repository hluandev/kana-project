import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";
import React from "react";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import {
  ArrowRightIcon,
  JapaneseYenIcon,
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
    isEndlessMode,
    setEndlessTarget,
    addTurns,
    addDiscard,
    endlessTarget,
    incrementEndlessTarget,
    multiplier,
    multiplierBonus,
    setMultiplierBonus,
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
    addFrozenSpecialCard,
    currentUpgrades,
    setCurrentUpgrades,
    setFrozenSpecialCards,
  } = useKanaStore();

  const [randomSpecialCards, setRandomSpecialCards] = React.useState(() =>
    [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 3)
  );

  // This will only run once when the component mounts
  React.useEffect(() => {
    const initialCards = [
      ...frozenSpecialCards,
      ...currentSpecialDeck
        .filter(
          (card) =>
            !frozenSpecialCards.some((frozen) => frozen.romaji === card.romaji)
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 3 - frozenSpecialCards.length),
    ];

    setRandomSpecialCards(initialCards);
    setFrozenSpecialCards([]);
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

  // React.useEffect(() => {
  //   playSound("/audio/win.mp3");
  // }, []);

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
            setTimeout(() => setValue(""), 0);
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
          playSound("/audio/deselect_card.mp3");
        } else if (selectedSpecial.length < 3) {
          addSelectedSpecial(matchingSpecial);
          playSound("/audio/select_card.mp3");
        }
        setTimeout(() => setValue(""), 0);
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
          playSound("/audio/deselect_card.mp3");
        } else if (selectedSpecial.length < 3) {
          addSelectedSpecial(matchingCard);
          playSound("/audio/select_card.mp3");
        }
        setTimeout(() => setValue(""), 0);
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
      playSound("/audio/select_card.mp3");
      setTimeout(() => setValue(""), 0);
    } else if (matchingCard) {
      addSelectedSpecial(matchingCard);
      playSound("/audio/select_card.mp3");
      setTimeout(() => setValue(""), 0);
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
    playSound("/audio/select_card.mp3");
  };

  const handleFreezeCard = () => {
    if (selectedSpecial.length === 0) {
      setWarning("Select cards to freeze first");
      playSound("/audio/error.mp3");
      return;
    }

    // Check if any selected cards are already frozen
    const selectedFrozenCards = selectedSpecial.filter((card) =>
      frozenSpecialCards.some((frozen) => frozen.romaji === card.romaji)
    );

    // if (selectedFrozenCards.length === 3) {
    //   setWarning("You can only freeze up to 3 cards");
    //   playSound("/audio/error.mp3");
    //   return;
    // }

    if (selectedFrozenCards.length > 0) {
      // Unfreeze the selected frozen cards
      const newFrozenCards = frozenSpecialCards.filter(
        (frozen) =>
          !selectedFrozenCards.some(
            (selected) => selected.romaji === frozen.romaji
          )
      );
      setFrozenSpecialCards(newFrozenCards);
      setSelectedSpecial([]);
      setTimeout(() => setValue(""), 0);
      playSound("/audio/deselect_card.mp3");
      return;
    }

    // Only allow freezing cards from randomSpecialCards
    const selectedFromRandom = selectedSpecial.every((card) =>
      randomSpecialCards.some((randomCard) => randomCard.romaji === card.romaji)
    );

    if (!selectedFromRandom) {
      setWarning("You can only freeze cards from the shop");
      playSound("/audio/error.mp3");
      return;
    }

    // Add selected cards to frozen cards
    selectedSpecial.forEach((card) => addFrozenSpecialCard(card));

    setSelectedSpecial([]);
    setTimeout(() => setValue(""), 0);
    playSound("/audio/freeze.mp3");
  };

  const handleSubmit = () => {
    const totalCost = selectedSpecial.reduce(
      (sum, card) => sum + card.price,
      0
    );

    // Separate upgrade cards from regular special cards
    const upgradeCards = selectedSpecial.filter(
      (card) => card.condition === "upgrade"
    );
    const regularCards = selectedSpecial.filter(
      (card) => card.condition !== "upgrade"
    );

    // Check if adding new regular cards would exceed the 5-card limit
    if (currentSpecial.length + regularCards.length > 5) {
      setWarning("You can only have 5 special cards at a time");
      playSound("/audio/error.mp3");
      return;
    }

    if (yen >= totalCost) {
      // Handle purchasing new cards
      currentSpecial.forEach((card) => {
        if (card.condition === "bought") {
          setMultiplierBonus(multiplierBonus + 1);
        }
      });

      // Remove purchased regular cards from the special deck
      const newSpecialDeck = currentSpecialDeck.filter(
        (card) =>
          !regularCards.some((regular) => regular.romaji === card.romaji)
      );

      // Remove purchased cards and their frozen versions from the shop display
      const newRandomSpecialCards = randomSpecialCards.filter(
        (card) =>
          !selectedSpecial.some(
            (selected) => selected.romaji === card.romaji
          ) &&
          !frozenSpecialCards.some((frozen) => frozen.romaji === card.romaji)
      );

      const newSpecialCards = Array.from(
        new Set([...currentSpecial, ...regularCards])
      );
      const newUpgradeCards = [...currentUpgrades];
      upgradeCards.forEach((upgradeCard) => {
        newUpgradeCards.push(upgradeCard);
      });

      // Clear frozen status of purchased cards
      const newFrozenCards = frozenSpecialCards.filter(
        (frozen) =>
          !selectedSpecial.some((selected) => selected.romaji === frozen.romaji)
      );

      setCurrentSpecialDeck(newSpecialDeck);
      setCurrentSpecial(newSpecialCards);
      setCurrentUpgrades(newUpgradeCards);
      setRandomSpecialCards(newRandomSpecialCards);
      setFrozenSpecialCards(newFrozenCards);
      setYen(yen - totalCost);
      setSelectedSpecial([]);

      setTimeout(() => setValue(""), 0);
      playSound("/audio/buy.mp3");
    } else {
      setWarning("You don't have enough yen");
      setTimeout(() => setValue(""), 0);
      playSound("/audio/error.mp3");
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
        .slice(0, 3 - frozenSpecialCards.length),
    ];

    // Combine frozen cards with new random cards
    setRandomSpecialCards([...frozenSpecialCards, ...newRandomCards]);

    drawHand();
    setTurns(4);
    setDiscard(4);

    if (isEndlessMode && endlessTarget === 1) {
      setEndlessTarget(10);
    } else if (isEndlessMode) {
      incrementEndlessTarget();
    }

    // Reset any previous bonuses
    let totalTurnBonus = 0;
    let totalDiscardBonus = 0;

    // Calculate new bonuses
    currentSpecial.forEach((special) => {
      if (special.condition === "life") {
        if (special.combo === "turn") {
          totalTurnBonus += special.reward;
        } else if (special.combo === "discard") {
          totalDiscardBonus += special.reward;
        }
      }
    });

    // Apply the bonuses if they exist
    if (totalTurnBonus !== 0) {
      addTurns(totalTurnBonus);
    }
    if (totalDiscardBonus !== 0) {
      addDiscard(totalDiscardBonus);
    }

    setSelectedCard([]);
    playSound("/audio/next_turn.mp3");
    setMultiplier(0);
    setScore(0);
    setProgress(0);
    setMissionID(missionID + 1);
  };

  const handleSellSpecial = () => {
    // Check if there are selected cards and they exist in currentSpecial
    const selectedCardsInCurrent = selectedSpecial.every((card) =>
      currentSpecial.some((current) => current.romaji === card.romaji)
    );

    if (selectedSpecial.length === 0 || !selectedCardsInCurrent) {
      setTimeout(() => setValue(""), 0);
      return;
    }

    // Filter out selected cards from currentSpecial
    const newCurrentSpecial = currentSpecial.filter(
      (card) =>
        !selectedSpecial.some((selected) => selected.romaji === card.romaji)
    );

    // Add sold cards back to the special deck, excluding upgrade cards
    const cardsToAddBack = selectedSpecial.filter(
      (card) => card.condition !== "upgrade"
    );
    const newSpecialDeck = [...currentSpecialDeck, ...cardsToAddBack];

    // Calculate yen to add (300 per card)
    const yenToAdd = selectedSpecial.length * 300;

    // Update the stores
    setCurrentSpecial(newCurrentSpecial);
    setCurrentSpecialDeck(newSpecialDeck);
    setSelectedSpecial([]);
    setYen(yen + yenToAdd);
    setTimeout(() => setValue(""), 0);
  };

  const handleRefreshCards = () => {
    if (yen >= 200) {
      setFrozenSpecialCards([]);
      setRandomSpecialCards(
        [...currentSpecialDeck].sort(() => Math.random() - 0.5).slice(0, 3)
      );
      setYen(yen - 200);
      if (currentSpecial.some((card) => card.condition === "reroll")) {
        setReroll(reroll + 1);
      }
      setSelectedSpecial([]);
      playSound("/audio/reroll.mp3");
      setTimeout(() => setValue(""), 0);
    } else {
      setWarning("You need 200 yen to refresh cards");
      playSound("/audio/error.mp3");
    }
  };

  return (
    <div className="w-[36rem] relative flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <motion.div
          className="text-[#cb980b] font-medium text-6xl"
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          You Defeated
        </motion.div>

        <p className="font-medium text-black/90">
          Buy or sell special cards to enchance the next round
        </p>
      </div>
      <div className="h-72 relative grid mt-10 grid-cols-3 gap-4 p-4 bg-black/5 border border-black/15 shadow-inner rounded-2xl">
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

        <div className="absolute -right-12 top-0 space-y-2">
          <ActionButton
            onClick={handleRefreshCards}
            icon={<RefreshCwIcon strokeWidth={1.7} className="w-5 h-5" />}
            descTooltip="Refresh cards to get new ones for ¥200. This will also cancel any frozen cards."
            keyboardShortcut="3"
            className="bg-[#ff915a]  hover:bg-[#ff915a] hover:bg-opacity-90"
          />

          {/* Freeze */}
          <ActionButton
            onClick={handleFreezeCard}
            descTooltip="Freeze cards to keep them in your deck until next turn."
            icon={<SnowflakeIcon strokeWidth={1.7} className="w-5 h-5" />}
            keyboardShortcut="4"
            className="bg-blue-300  hover:bg-blue-300/80"
          />

          <div className=" bg-white border border-black/15 shadow-sm p-2 font-medium rounded-full aspect-square w-10 h-10 flex items-center justify-center">
            {currentSpecialDeck.length}
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex bg-white border border-black/15 shadow-sm h-full mt-10 rounded-full p-1"
      >
        <ActionButton
          onClick={handleSellSpecial}
          icon={
            <JapaneseYenIcon
              strokeWidth={1.7}
              className="w-[1.2rem] h-[1.2rem]"
            />
          }
          descTooltip="Sell special cards"
          keyboardShortcut="1"
          className="bg-[#EFCB68]  hover:bg-yellow-600/40"
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type here"
          className="flex text-center text-[0.9rem] outline-none rounded-md"
        />

        <ActionButton
          onClick={selectedSpecial.length > 0 ? handleSubmit : handleNextTurn}
          descTooltip={
            selectedSpecial.length > 0
              ? "Buy special cards"
              : "Go to the next round"
          }
          icon={
            selectedSpecial.length > 0 ? (
              <ShoppingCartIcon strokeWidth={1.7} className="w-5 h-5" />
            ) : (
              <ArrowRightIcon strokeWidth={1.7} className="w-5 h-5" />
            )
          }
          keyboardShortcut="2"
          className="bg-[#EFCB68]  hover:bg-yellow-600/40"
        />
      </form>
    </div>
  );
};
