import { create } from "zustand";

interface kanaStore {
  kana: any[];
  currentHand: any[];
  setKana: (kana: any[]) => void;
  currentDeck: any[];
  setCurrentDeck: (currentDeck: any[]) => void;
  setCurrentHand: (currentHand: any[]) => void;
  selectedCard: any[];
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
  setSelectedCard: (card) =>
    set((state) => ({
      selectedCard: [...state.selectedCard, card],
    })),
}));
