import { create } from "zustand";

interface SettingStore {
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
  isMuted: false,
  setIsMuted: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isMuted", value.toString());
    }
    set({ isMuted: value });
  },
}));
