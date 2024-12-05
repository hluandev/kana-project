import { create } from "zustand";

interface PlayerInfo {
  id: string;
  username: string;
  first_name: string;
  level: number;
  xp: number;
  wins: number;
  losses: number;
  highest_score: number;
}

interface Activity {
  created_at: string;
  wins: number;
  losses: number;
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
  activity: Activity[];
  setActivity: (activity: Activity[]) => void;
  checkSubscription: () => Promise<void>;
  hasCheckedSubscription: boolean;
}

export const usePlayerStore = create<playerStore>((set, get) => ({
  info: {
    id: "",
    first_name: "",
    level: 0,
    xp: 0,
    wins: 0,
    losses: 0,
    highest_score: 0,
    username: "",
    stripe_customer_id: "",
  },
  activity: [],
  setActivity: (activity: Activity[]) => set({ activity }),
  isSubscribed: false,
  hasCheckedSubscription: false,
  setIsSubscribed: (isSubscribed) => set({ isSubscribed }),
  checkSubscription: async () => {
    const state = get();
    if (!state.hasCheckedSubscription) {
      const response = await fetch("/api/stripe/status");
      const { isSubscribed } = await response.json();
      set({
        isSubscribed,
        hasCheckedSubscription: true,
      });
    }
  },
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
      },
    })),
}));
