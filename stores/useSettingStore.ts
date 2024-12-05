import { create } from "zustand";

interface SettingStore {
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
  isMuted: localStorage.getItem("isMuted") === "true" || false,
  setIsMuted: (value) => {
    localStorage.setItem("isMuted", value.toString());
    set({ isMuted: value });
  },
}));
