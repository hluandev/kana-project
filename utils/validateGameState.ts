import { usePlayerStore } from "@/stores/usePlayerStore";
import { createClient } from "./supabase/server";

interface GameState {
  turns: number;
  score: number;
  multiplier: number;
  progress: number;
  missionID: number;
  currentHand: any[];
  currentDeck: any[];
  currentSpecial: any[];
  yen: number;
  lastUpdated: string;
}

interface PreviousState {
  state: {
    missionID: number;
    lastUpdated: string;
  };
}

export async function validateGameState(state: GameState): Promise<boolean> {
  // Validate basic ranges
  if (
    state.turns < 0 ||
    state.turns > 4 ||
    state.score < 0 ||
    state.multiplier < 0 ||
    state.progress < 0 ||
    state.missionID < 1 ||
    state.yen < 0
  ) {
    return false;
  }

  // Validate hand size
  if (state.currentHand.length > 8 || state.currentSpecial.length > 5) {
    return false;
  }

  // Validate mission progression
  if (state.missionID > 1) {
    const supabase = await createClient();
    const { data: previousState } = (await supabase
      .from("game_states")
      .select("state->missionID, state->lastUpdated")
      .eq("user_id", usePlayerStore.getState().info.id)
      .lt("state->lastUpdated", state.lastUpdated)
      .order("state->lastUpdated", { ascending: false })
      .limit(1)
      .single()) as { data: PreviousState };

    if (previousState) {
      // Check if mission progression is legitimate
      if (state.missionID > previousState.state.missionID + 1) {
        return false;
      }

      //   // Check if time between updates is reasonable
      //   const timeDiff =
      //     new Date(state.lastUpdated).getTime() -
      //     new Date(previousState.state.lastUpdated).getTime();
      //   if (timeDiff < 10000) {
      //     // Minimum 10 seconds between mission completions
      //     return false;
      //   }
    }
  }

  return true;
}
