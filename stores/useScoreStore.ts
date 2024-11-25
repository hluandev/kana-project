import { create } from "zustand";

interface scoreStore {
  score: number;
  multiplier: number;
  turns: number;
  discard: number;
  setScore: (score: number) => void;
  setMultiplier: (multiplier: number) => void;
  setTurns: (turns: number) => void;
  setDiscard: (discard: number) => void;
  setAnnouncement: (announcement: string) => void;
  announcement: string;
  missionID: number;
  setMissionID: (missionID: number) => void;
  progress: number;
  setProgress: (progress: number) => void;
  yen: number;
  setYen: (yen: number) => void;
}

export const useScoreStore = create<scoreStore>((set) => ({
  score: 0,
  multiplier: 0,
  turns: 4,
  discard: 4,
  yen: 0,
  announcement: "",
  missionID: 1,
  progress: 0,
  setYen: (yen) => set({ yen }),
  setScore: (score) => set({ score }),
  setMultiplier: (multiplier) => set({ multiplier }),
  setTurns: (turns) => set({ turns }),
  setDiscard: (discard) => set({ discard }),
  setAnnouncement: (announcement) => set({ announcement }),
  setMissionID: (missionID) => set({ missionID }),
  setProgress: (progress) => set({ progress }),
}));
