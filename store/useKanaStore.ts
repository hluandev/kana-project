import { create } from "zustand";

type Kana = {
  id: number;
  japanese: string;
  suit: string;
  romaji: string;
};

interface KanaStore {
  initKana: Kana[];
  readyHand: Kana[];
  kanaDeck: Kana[];
  setInitKana: (kana: Kana[]) => void;
  setKanaDeck: (kana: Kana[]) => void;
  addToReadyHand: (card: Kana) => void;
  removeFromReadyHand: (cardId: number) => void;
  setReadyHand: (hand: Kana[]) => void;
}

export const useKanaStore = create<KanaStore>((set) => ({
  initKana: [],
  kanaDeck: [],
  readyHand: [],
  setInitKana: (kana) => set({ initKana: kana }),
  setKanaDeck: (kana) => set({ kanaDeck: kana }),
  addToReadyHand: (card) =>
    set((state) => ({
      readyHand: [...state.readyHand, card],
    })),
  removeFromReadyHand: (cardId) =>
    set((state) => ({
      readyHand: state.readyHand.filter((card) => card.id !== cardId),
    })),
  setReadyHand: (hand) => set({ readyHand: hand }),
}));
