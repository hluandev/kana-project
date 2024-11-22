import { create } from "zustand";

interface kanaStore {
  kana: any[];
  setKana: (kana: any[]) => void;
}

export const useKanaStore = create<kanaStore>((set) => ({
  kana: [],
  setKana: (kana) => set({ kana }),
}));
