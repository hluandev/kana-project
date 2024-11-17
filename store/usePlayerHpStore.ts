import { create } from "zustand";

type Store = {
  hp: number;
  setHp: (e: number) => void;
};

export const usePlayerHpStore = create<Store>()((set) => ({
  hp: 100,
  setHp: (e) => set(() => ({ hp: e })),
}));
