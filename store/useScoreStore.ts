import { create } from "zustand";

interface ScoreStore {
  score: number;
  multiplier: number;
  totalScore: number;
  setScore: (score: number) => void;
  setMultiplier: (multiplier: number) => void;
  setTotalScore: (totalScore: number) => void;
}

export const useScoreStore = create<ScoreStore>((set) => ({
  score: 0,
  multiplier: 0,
  totalScore: 0,
  setScore: (score) => set({ score }),
  setMultiplier: (multiplier) => set({ multiplier }),
  setTotalScore: (totalScore) => set({ totalScore }),
}));
