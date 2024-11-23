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
}

export const useKanaStore = create<kanaStore>((set) => ({
  kana: [],
  currentDeck: [],
  currentHand: [],
  selectedCard: [],
  setCurrentDeck: (currentDeck) => set({ currentDeck }),
  setCurrentHand: (currentHand) => set({ currentHand }),
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
