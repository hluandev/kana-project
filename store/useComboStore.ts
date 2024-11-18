import { create } from "zustand";

type Store = {
  combo: number[];
  setCombo: (e: number[]) => void;
};

export const useComboStore = create<Store>()((set) => ({
  combo: [],
  setCombo: (e) => set(() => ({ combo: e })),
}));
