import { create } from "zustand";

type Kana = {
  id: number;
  japanese: string;
  suit: string;
  romaji: string;
};

interface KanaStore {
  kana: Kana[];
  setKana: (kana: Kana[]) => void;
}

export const useKanaStore = create<KanaStore>((set) => ({
  kana: [],
  setKana: (kana) => set({ kana }),
}));
