import { create } from "zustand";

type Kana = {
  id: number;
  japanese: string;
  suit: string;
  romaji: string;
};

interface KanaStore {
  kana: Kana[];
  readyHand: Kana[];
  kanaDeck: Kana[];
  setKana: (kana: Kana[]) => void;
  addToReadyHand: (card: Kana) => void;
  removeFromReadyHand: (cardId: number) => void;
  removeFromDeck: (ids: number[]) => void;
}

export const useKanaStore = create<KanaStore>((set) => ({
  kana: [],
  readyHand: [],
  kanaDeck: [],
  setKana: (kana) => set({ kana }),
  addToReadyHand: (card) =>
    set((state) => ({
      readyHand: [...state.readyHand, card],
    })),
  removeFromReadyHand: (cardId) =>
    set((state) => ({
      readyHand: state.readyHand.filter((card) => card.id !== cardId),
    })),
  removeFromDeck: (ids: number[]) =>
    set((state) => ({
      kana: state.kana.filter((card) => !ids.includes(card.id)),
      readyHand: state.readyHand.filter((card) => !ids.includes(card.id)),
    })),
}));
