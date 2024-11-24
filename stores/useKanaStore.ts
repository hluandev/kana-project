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
}

export const useKanaStore = create<kanaStore>((set, get) => ({
  kana: [],
  currentDeck: [],
  currentHand: [],
  currentSpecialDeck: [],
  currentSpecial: [],
  selectedCard: [],
  kanaMissions: [],
  kanaSpecial: [],

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
}));
