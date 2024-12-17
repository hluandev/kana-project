import { create } from "zustand";

interface SettingStore {
  isMuted: boolean;
  showTools: boolean;
  setIsMuted: (value: boolean) => void;
  setShowTools: (value: boolean) => void;
}

export const useSettingStore = create<SettingStore>((set) => ({
  isMuted: false,
  showTools: false,
  setIsMuted: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isMuted", value.toString());
    }
    set({ isMuted: value });
  },
  setShowTools: (value) => {
    set({ showTools: value });
  },
}));
