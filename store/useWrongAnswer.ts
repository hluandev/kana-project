import { create } from "zustand";

type Store = {
  wrong: boolean;
  setWrong: (e: boolean) => void;
};

export const useWrongStore = create<Store>()((set) => ({
  wrong: false,
  setWrong: (e) => set(() => ({ wrong: e })),
}));
