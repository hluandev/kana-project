"use server";

import { createClient } from "@/utils/supabase/server";
import { validateGameState } from "@/utils/validateGameState";

interface GameStateData {
  turns: number;
  score: number;
  multiplier: number;
  progress: number;
  missionID: number;
  currentHand: any[];
  currentDeck: any[];
  currentSpecial: any[];
  currentSpecialDeck: any[];
  yen: number;
  discard: number;
  currentUpgrades: any[];
  randomSpecialCards: any[];
  reroll: number;
  isEndlessMode: boolean;
  endlessTarget: number;
  multiplierBonus: number;
}

export async function saveGameState(gameState: GameStateData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const filteredGameState = {
    ...gameState,
    currentSpecialDeck: gameState.currentSpecialDeck?.filter(
      (card) =>
        !gameState.currentSpecial.some((special) => special.id === card.id)
    ),
    lastUpdated: new Date().toISOString(),
  };

  const stateWithTimestamp = {
    ...gameState,
    lastUpdated: new Date().toISOString(),
  };

  const isValid = await validateGameState(stateWithTimestamp);
  if (!isValid) {
    throw new Error("Invalid game state");
  }

  const { data: existingState } = await supabase
    .from("game_states")
    .select()
    .eq("user_id", user.id)
    .single();

  if (existingState) {
    const { error } = await supabase
      .from("game_states")
      .update({ state: filteredGameState })
      .eq("user_id", user.id);

    if (error) throw error;
  } else {
    const { error } = await supabase.from("game_states").insert({
      user_id: user.id,
      state: filteredGameState,
      created_at: new Date().toISOString(),
    });

    if (error) throw error;
  }
}

export async function loadGameState() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("game_states")
    .select("state")
    .eq("user_id", user.id)
    .single();

  return data?.state as GameStateData | null;
}
