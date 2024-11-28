import { useKanaStore } from "@/stores/useKanaStore";
import { ActionButton } from "./action-button";
import { useScoreStore } from "@/stores/useScoreStore";
import { JapaneseYenIcon } from "lucide-react";

export const SortCurrentHand = () => {
  const {
    selectedSpecial,
    currentSpecial,
    currentSpecialDeck,
    setCurrentSpecial,
    setSelectedSpecial,
    setCurrentSpecialDeck,
  } = useKanaStore();
  const { setYen, yen } = useScoreStore();

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
    <ActionButton
      onClick={handleSellSpecial}
      icon={<JapaneseYenIcon />}
      keyboardShortcut="2"
      className="bg-yellow-600/20 hover:bg-yellow-600/40"
    />
  );
};
