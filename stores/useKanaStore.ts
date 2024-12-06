import { create } from "zustand";

interface kanaStore {
  kana: any[];
  currentHand: any[];
  setKana: (kana: any[]) => void;
  currentDeck: any[];
  setCurrentDeck: (currentDeck: any[]) => void;
  setCurrentHand: (currentHand: any[]) => void;
  selectedCard: any[];
  addSelectedCard: (card: any) => void;
  removeSelectedCard: (card: any) => void;
  setSelectedCard: (card: any) => void;
  kanaMissions: any[];
  setKanaMissions: (kanaMissions: any[]) => void;
  kanaSpecial: any[];
  setKanaSpecial: (kanaSpecial: any[]) => void;
  drawHand: () => void;
  currentSpecial: any[];
  setCurrentSpecial: (currentSpecial: any[]) => void;
  addCurrentSpecial: (currentSpecial: any) => void;
  drawSpecial: () => void;
  currentSpecialDeck: any[];
  setCurrentSpecialDeck: (currentSpecialDeck: any[]) => void;
  selectedSpecial: any[];
  setSelectedSpecial: (selectedSpecial: any[]) => void;
  addSelectedSpecial: (selectedSpecial: any) => void;
  removeSelectedSpecial: (selectedSpecial: any) => void;
  hiragana: boolean;
  setHiragana: (hiragana: boolean) => void;
  frozenSpecialCards: any[];
  setFrozenSpecialCards: (frozenSpecialCards: any[]) => void;
  addFrozenSpecialCard: (card: any) => void;
  removeFrozenSpecialCard: (card: any) => void;
  showRomaji: boolean;
  setShowRomaji: (showRomaji: boolean) => void;
  currentUpgrades: any[];
  setCurrentUpgrades: (currentUpgrades: any[]) => void;
  addCurrentUpgrade: (upgrade: any) => void;
  removeCurrentUpgrade: (upgrade: any) => void;
  activeSpecials: string[];
  setActiveSpecials: (ids: string[]) => void;
  randomSpecialCards: any[];
  setRandomSpecialCards: (cards: any[]) => void;
  generateRandomSpecialCards: () => void;
}

export const useKanaStore = create<kanaStore>((set, get) => ({
  kana: [],
  showRomaji: true,
  setShowRomaji: (showRomaji) => {
    localStorage.setItem("showRomaji", showRomaji.toString());
    set({ showRomaji });
  },
  hiragana: true,
  setHiragana: (hiragana) => set({ hiragana }),
  randomSpecialCards: [],
  setRandomSpecialCards: (cards) => set({ randomSpecialCards: cards }),
  generateRandomSpecialCards: () => {
    const { currentSpecialDeck, frozenSpecialCards, kanaSpecial } = get();

    // If currentSpecialDeck is empty, reset it from kanaSpecial
    const deckToUse =
      currentSpecialDeck.length > 0 ? currentSpecialDeck : [...kanaSpecial];

    const initialCards = [
      ...frozenSpecialCards,
      ...deckToUse
        .filter(
          (card) =>
            !frozenSpecialCards.some((frozen) => frozen.romaji === card.romaji)
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 3 - frozenSpecialCards.length),
    ];

    set({ randomSpecialCards: initialCards });
  },
  currentDeck: [],
  currentHand: [],
  currentSpecialDeck: [],
  currentSpecial: [],
  selectedCard: [],
  selectedSpecial: [],
  kanaMissions: [],
  kanaSpecial: [],
  setSelectedSpecial: (selectedSpecial) => set({ selectedSpecial }),
  addSelectedSpecial: (selectedSpecial) =>
    set((state) => ({
      selectedSpecial: [...state.selectedSpecial, selectedSpecial],
    })),
  removeSelectedSpecial: (selectedSpecial) =>
    set((state) => ({
      selectedSpecial: state.selectedSpecial.filter(
        (c) => c !== selectedSpecial
      ),
    })),
  setKanaSpecial: (kanaSpecial) => set({ kanaSpecial }),
  setCurrentSpecialDeck: (currentSpecialDeck) => set({ currentSpecialDeck }),
  setKanaMissions: (kanaMissions) => set({ kanaMissions }),
  setCurrentDeck: (currentDeck) => set({ currentDeck }),
  setCurrentHand: (currentHand) => set({ currentHand }),
  setCurrentSpecial: (currentSpecial) => set({ currentSpecial }),
  addCurrentSpecial: (currentSpecial) =>
    set((state) => ({
      currentSpecial: [...state.currentSpecial, currentSpecial],
    })),
  drawSpecial: () => {
    const { kanaSpecial } = get();
    const currentSpecialDeck = [...kanaSpecial];
    set({ currentSpecialDeck: currentSpecialDeck });
  },
  drawHand: () => {
    const { kana } = get();
    const newHand = [];
    const currentDecks = [...kana];

    for (let i = 0; i < 8 && currentDecks.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * currentDecks.length);
      newHand.push(currentDecks.splice(randomIndex, 1)[0]);
    }

    newHand.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });

    set({ currentHand: newHand, currentDeck: currentDecks });
  },
  setKana: (kana) => set({ kana }),
  setSelectedCard: (card) => set({ selectedCard: card }),
  addSelectedCard: (card) =>
    set((state) => ({
      selectedCard: [...state.selectedCard, card],
    })),
  removeSelectedCard: (card) =>
    set((state) => ({
      selectedCard: state.selectedCard.filter((c) => c !== card),
    })),
  frozenSpecialCards: [],
  setFrozenSpecialCards: (frozenSpecialCards) => set({ frozenSpecialCards }),
  addFrozenSpecialCard: (card) =>
    set((state) => ({
      frozenSpecialCards: [...state.frozenSpecialCards, card],
    })),
  removeFrozenSpecialCard: (card) =>
    set((state) => ({
      frozenSpecialCards: state.frozenSpecialCards.filter((c) => c !== card),
    })),
  currentUpgrades: [],
  setCurrentUpgrades: (currentUpgrades) => set({ currentUpgrades }),
  addCurrentUpgrade: (upgrade) =>
    set((state) => ({
      currentUpgrades: [...state.currentUpgrades, upgrade],
    })),
  removeCurrentUpgrade: (upgrade) =>
    set((state) => ({
      currentUpgrades: state.currentUpgrades.filter((u) => u !== upgrade),
    })),
  activeSpecials: [],
  setActiveSpecials: (ids) => set({ activeSpecials: ids }),
}));
