import { create } from "zustand";

interface ScoreStore {
  score: number;
  multiplier: number;
  setScore: (score: number) => void;
  setMultiplier: (multiplier: number) => void;
}

export const useScoreStore = create<ScoreStore>((set) => ({
  score: 0,
  multiplier: 0,
  setScore: (score) => set({ score }),
  setMultiplier: (multiplier) => set({ multiplier }),
}));
