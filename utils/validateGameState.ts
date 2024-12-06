interface GameState {
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
  lastUpdated: string;
}

export async function validateGameState(state: GameState): Promise<boolean> {
  console.log("Validating state:", state);

  // Validate basic ranges
  if (
    state.turns < 0 ||
    state.turns > 4 ||
    state.score < 0 ||
    state.multiplier < 0 ||
    state.progress < 0 ||
    state.missionID < 1 ||
    state.yen < 0 ||
    state.discard < 0
  ) {
    console.log("Failed basic range validation:", state);
    return false;
  }

  // Validate arrays exist
  if (
    !Array.isArray(state.currentHand) ||
    !Array.isArray(state.currentDeck) ||
    !Array.isArray(state.currentSpecial) ||
    !Array.isArray(state.currentSpecialDeck) ||
    !Array.isArray(state.currentUpgrades) ||
    !Array.isArray(state.randomSpecialCards)
  ) {
    console.log("Failed array validation");
    return false;
  }

  // Validate hand size
  if (state.currentHand.length > 8 || state.currentSpecial.length > 5) {
    console.log("Failed hand size validation");
    return false;
  }

  return true;
}
