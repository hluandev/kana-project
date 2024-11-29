import { create } from "zustand";

interface PlayerInfo {
  id: string;
  name: string;
  level: number;
  xp: number;
  wins: number;
  losses: number;
  matches: number;
  highest_score: number;
}

interface playerStore {
  info: PlayerInfo;
  setInfo: (info: PlayerInfo) => void;
  updateXp: (xp: number) => void;
  updateLevel: (level: number) => void;
  setXp: (xp: number) => void;
}

export const usePlayerStore = create<playerStore>((set) => ({
  info: {
    id: "",
    name: "",
    level: 0,
    xp: 0,
    wins: 0,
    losses: 0,
    matches: 0,
    highest_score: 0,
  },
  setInfo: (info: PlayerInfo) => set({ info }),
  setXp: (xp: number) => set((state) => ({ info: { ...state.info, xp } })),
  updateXp: (xp: number) =>
    set((state) => ({ info: { ...state.info, xp: state.info.xp + xp } })),
  updateLevel: (level: number) =>
    set((state) => ({ info: { ...state.info, level } })),
}));
