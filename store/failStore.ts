import { create } from "zustand";

type Store = {
  fail: boolean;
  setFail: (e: boolean) => void;
};

export const failStore = create<Store>()((set) => ({
  fail: false,
  setFail: (e) => set((state) => ({ fail: (state.fail = e) })),
}));
