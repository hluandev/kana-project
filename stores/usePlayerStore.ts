import { create } from "zustand";

interface PlayerInfo {
  id: string;
  first_name: string;
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
  updateGameResult: (won: boolean) => void;
  isSubscribed: boolean;
  setIsSubscribed: (isSubscribed: boolean) => void;
}

export const usePlayerStore = create<playerStore>((set) => ({
  info: {
    id: "",
    first_name: "",
    level: 0,
    xp: 0,
    wins: 0,
    losses: 0,
    matches: 0,
    highest_score: 0,
    stripe_customer_id: "",
  },
  isSubscribed: false,
  setIsSubscribed: (isSubscribed: boolean) => set({ isSubscribed }),
  setInfo: (info: PlayerInfo) => set({ info }),
  setXp: (xp: number) => set((state) => ({ info: { ...state.info, xp } })),
  updateXp: (xp: number) =>
    set((state) => ({ info: { ...state.info, xp: state.info.xp + xp } })),
  updateLevel: (level: number) =>
    set((state) => ({ info: { ...state.info, level } })),
  updateGameResult: (won: boolean) =>
    set((state) => ({
      info: {
        ...state.info,
        wins: state.info.wins + (won ? 1 : 0),
        losses: state.info.losses + (won ? 0 : 1),
        matches: state.info.matches + 1,
      },
    })),
}));
