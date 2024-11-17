import { create } from "zustand";

type Store = {
  hp: number;
  setHp: () => void;
};

export const usePlayerHpStore = create<Store>()((set) => ({
  hp: 100,
  setHp: () => set((state) => ({ hp: state.hp + 1 })),
}));
