"use client";
import { useScoreStore } from "./useScoreStore";

import { create } from "zustand";
import {
  saveGameState,
  loadGameState,
} from "@/actions/server/game-state-actions";
import { useKanaStore } from "./useKanaStore";

type GameStateStore = {
  hasSavedGame: boolean;
  isLoading: boolean;
  saveGame: () => Promise<void>;
  loadGame: () => Promise<void>;
};

export const useGameStateStore = create<GameStateStore>((set) => ({
  hasSavedGame: false,
  isLoading: true,

  saveGame: async () => {
    const scoreState = useScoreStore.getState();
    const kanaState = useKanaStore.getState();

    await saveGameState({
      turns: scoreState.turns,
      score: scoreState.score,
      multiplier: scoreState.multiplier,
      progress: scoreState.progress,
      missionID: scoreState.missionID,
      reroll: scoreState.reroll,
      currentHand: kanaState.currentHand,
      currentDeck: kanaState.currentDeck,
      currentSpecial: kanaState.currentSpecial,
      currentSpecialDeck: kanaState.currentSpecialDeck,
      isEndlessMode: scoreState.isEndlessMode,
      endlessTarget: scoreState.endlessTarget,
      yen: scoreState.yen,
      discard: scoreState.discard,
      currentUpgrades: kanaState.currentUpgrades,
      randomSpecialCards: kanaState.randomSpecialCards,
      multiplierBonus: scoreState.multiplierBonus,
    });
  },

  loadGame: async () => {
    set({ isLoading: true });
    try {
      const data = await loadGameState();
      if (data) {
        useScoreStore.setState({
          turns: data.turns,
          score: data.score,
          multiplier: data.multiplier,
          progress: data.progress,
          missionID: data.missionID,
          isEndlessMode: data.isEndlessMode,
          endlessTarget: data.endlessTarget,
          reroll: data.reroll,
          yen: data.yen,
          discard: data.discard,
          multiplierBonus: data.multiplierBonus,
        });

        useKanaStore.setState({
          currentSpecialDeck: data.currentSpecialDeck || [],
          currentHand: data.currentHand || [],
          currentDeck: data.currentDeck || [],
          currentSpecial: data.currentSpecial || [],
          currentUpgrades: data.currentUpgrades || [],
          randomSpecialCards: data.randomSpecialCards || [],
        });

        set({ hasSavedGame: true });
      }
    } catch (error) {
      console.error("Error loading game state:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
