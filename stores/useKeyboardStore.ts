import { create } from "zustand";

interface KeyboardStore {
  value: string;
  setValue: (value: string) => void;
  handleChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
  setHandleChange: (
    fn: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null
  ) => void;
}

export const useKeyboardStore = create<KeyboardStore>((set) => ({
  value: "",
  setValue: (value) => set({ value }),
  handleChange: null,
  setHandleChange: (fn) => set({ handleChange: fn }),
}));
