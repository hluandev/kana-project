import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";
import React from "react";
import { ActionButton } from "../board/actions-hand/buttons/action-button";
import {
  ArrowRightIcon,
  DeleteIcon,
  JapaneseYenIcon,
  RefreshCwIcon,
  ShoppingCartIcon,
  SnowflakeIcon,
} from "lucide-react";
import { playSound } from "@/actions/client/play-sound";
import { useGameStateStore } from "@/stores/useGameStateStore";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { VirtualKeyboard } from "../board/actions-hand/virtual-keyboard";

export const Win = () => {
  const isMobile = useIsMobile();

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
    randomSpecialCards,
    setRandomSpecialCards,
    generateRandomSpecialCards,
  } = useKanaStore();

  const { saveGame } = useGameStateStore();

  // This will only run once when the component mounts
  React.useEffect(() => {
    // if (randomSpecialCards.length === 0) {
    //   generateRandomSpecialCards();
    // }
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
    const inputValue = e.target.value.toLowerCase();
    const newValue = e.type === "click" ? value + inputValue : inputValue;
    setValue(newValue);

    // If we already have selected special cards from currentSpecial
    if (
      selectedSpecial.length > 0 &&
      currentSpecial.some((card) => card.romaji === selectedSpecial[0].romaji)
    ) {
      // Check if input is a number 5-9 for reordering
      const input = parseInt(newValue);
      if (!isNaN(input) && input >= 5 && input <= 9) {
        const targetIndex = input - 5;
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
        (card) => card.romaji.toLowerCase() === newValue
      );

      if (matchingSpecial) {
        const isAlreadySelected = selectedSpecial.some(
          (card) => card.romaji === matchingSpecial.romaji
        );

        if (isAlreadySelected) {
          playSound("DESELECT");
          removeSelectedSpecial(matchingSpecial);
        } else if (selectedSpecial.length < 3) {
          playSound("SELECT");
          addSelectedSpecial(matchingSpecial);
        }
        setTimeout(() => setValue(""), 0);
      }
      return;
    }

    // If we already have selected cards from randomSpecialCards
    if (selectedSpecial.length > 0) {
      const matchingCard = randomSpecialCards.find(
        (card) => card.romaji.toLowerCase() === newValue
      );

      if (matchingCard) {
        const isAlreadySelected = selectedSpecial.some(
          (card) => card.romaji === matchingCard.romaji
        );

        if (isAlreadySelected) {
          playSound("DESELECT");
          removeSelectedSpecial(matchingCard);
        } else if (selectedSpecial.length < 3) {
          playSound("SELECT");
          addSelectedSpecial(matchingCard);
        }
        setTimeout(() => setValue(""), 0);
      }
      return;
    }

    // If no cards are selected yet, determine the source of the first selection
    const matchingCard = randomSpecialCards.find(
      (card) => card.romaji.toLowerCase() === newValue
    );
    const matchingSpecial = currentSpecial.find(
      (card) => card.romaji.toLowerCase() === newValue
    );

    // Only allow selection from one source
    if (matchingSpecial) {
      playSound("SELECT");
      addSelectedSpecial(matchingSpecial);
      setTimeout(() => setValue(""), 0);
    } else if (matchingCard) {
      playSound("SELECT");
      addSelectedSpecial(matchingCard);
      setTimeout(() => setValue(""), 0);
    }
  };

  const handleReorderSpecial = (fromIndex: number, toIndex: number) => {
    playSound("SELECT");
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
  };

  const handleFreezeCard = () => {
    playSound("FREEZE");

    if (selectedSpecial.length === 0) {
      playSound("ERROR");
      setWarning("Select cards to freeze first");
      return;
    }

    // Check if any selected cards are already frozen
    const selectedFrozenCards = selectedSpecial.filter((card) =>
      frozenSpecialCards.some((frozen) => frozen.romaji === card.romaji)
    );

    // if (selectedFrozenCards.length === 3) {
    //   setWarning("You can only freeze up to 3 cards");
    //   playSound("ERROR");
    //   return;
    // }

    if (selectedFrozenCards.length > 0) {
      playSound("DESELECT");
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
      return;
    }

    // Only allow freezing cards from randomSpecialCards
    const selectedFromRandom = selectedSpecial.every((card) =>
      randomSpecialCards.some((randomCard) => randomCard.romaji === card.romaji)
    );

    if (!selectedFromRandom) {
      playSound("ERROR");
      setWarning("You can only freeze cards from the shop");
      return;
    }

    // Add selected cards to frozen cards
    selectedSpecial.forEach((card) => addFrozenSpecialCard(card));

    setSelectedSpecial([]);
    setTimeout(() => setValue(""), 0);
  };

  const handleSubmit = () => {
    // Check if any selected cards are from currentSpecial
    const hasCurrentSpecialCards = selectedSpecial.some((card) =>
      currentSpecial.some((currentCard) => currentCard.romaji === card.romaji)
    );

    if (hasCurrentSpecialCards) {
      playSound("ERROR");
      setWarning("You already own these cards!");
      setSelectedSpecial([]);
      setTimeout(() => setValue(""), 0);
      return;
    }

    playSound("BUY");
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
      playSound("ERROR");
      setTimeout(() => setValue(""), 0);
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
    } else {
      playSound("ERROR");
      setWarning("You don't have enough yen");
      setTimeout(() => setValue(""), 0);
    }
  };

  const handleNextTurn = async () => {
    playSound("NEXT_TURN");
    generateRandomSpecialCards();
    drawHand();
    setTurns(4);
    setDiscard(4);

    if (isEndlessMode && endlessTarget === 1) {
      setEndlessTarget(30000);
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
    setMultiplier(0);
    setScore(0);
    setProgress(0);
    setMissionID(missionID + 1);
    await saveGame();
  };

  const handleSellSpecial = () => {
    playSound("BUY");
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
      playSound("REROLL");
      setFrozenSpecialCards([]);
      generateRandomSpecialCards();
      setYen(yen - 200);
      if (currentSpecial.some((card) => card.condition === "reroll")) {
        setReroll(reroll + 1);
      }
      setSelectedSpecial([]);
      setTimeout(() => setValue(""), 0);
    } else {
      playSound("ERROR");
      setWarning("You need ¥200 to refresh cards");
      setTimeout(() => setValue(""), 0);
    }
  };

  return (
    <div className="w-fit relative gap-1 flex flex-col items-center">
      <div className="flex flex-col items-center max-lg:hidden">
        <motion.div
          className="text-[#cb980b] font-medium lg:text-6xl text-xl"
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          You Defeated
        </motion.div>

        <p className="font-medium text-xs lg:text-base text-black/90">
          Buy or sell special cards to enchance the next round
        </p>
      </div>
      <div className="relative grid lg:mt-5 grid-cols-3 lg:gap-2 gap-0.5 lg:p-2 p-0.5 bg-black/5 border border-black/10 shadow-inner rounded-xl">
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

        <div className="absolute lg:-right-12 -right-8 top-0 space-y-2">
          <ActionButton
            onClick={handleRefreshCards}
            icon={
              <RefreshCwIcon
                strokeWidth={1.7}
                className="lg:w-5 lg:h-5 w-4 h-4"
              />
            }
            descTooltip="Refresh cards to get new ones for ¥200. This will also cancel any frozen cards."
            keyboardShortcut="3"
            className="bg-[#ff915a]  hover:bg-[#ff915a] hover:bg-opacity-90"
          />

          {/* Freeze */}
          <ActionButton
            onClick={handleFreezeCard}
            descTooltip="Freeze cards to keep them in your deck until next turn."
            icon={
              <SnowflakeIcon
                strokeWidth={1.7}
                className="lg:w-5 lg:h-5 w-4 h-4"
              />
            }
            keyboardShortcut="4"
            className="bg-blue-300  hover:bg-blue-300/80"
          />

          <div className=" bg-white border border-black/10 shadow-sm p-2 font-medium rounded-full aspect-square lg:w-10 lg:h-10 w-6 text-xs h-6 flex items-center justify-center">
            {currentSpecialDeck.length}
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex bg-white relative border border-black/10 shadow-sm h-full mb-28 mt-1 lg:mb-2 lg:mt-4 rounded-full lg:p-2 p-1"
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
          readOnly={isMobile}
          onChange={handleInputChange}
          placeholder={isMobile ? "Choose text below" : "Type here"}
          className="flex text-center text-sm outline-none rounded-md"
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

        <div
          onClick={() => setValue(value.slice(0, -1))}
          className="lg:hidden absolute -right-9  top-1/2 -translate-y-1/2 bg-white rounded-xl border border-black/10 shadow-sm p-1.5"
        >
          <DeleteIcon className="w-4 h-4" />
        </div>
      </form>

      <VirtualKeyboard handleChange={handleInputChange} value={value} />
    </div>
  );
};
