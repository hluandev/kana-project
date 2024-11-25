import { create } from "zustand";

interface ComboStore {
  combo: string;
  highCard: { score: number; multiplier: number };
  pair: { score: number; multiplier: number };
  twoPairs: { score: number; multiplier: number };
  threeOfAKind: { score: number; multiplier: number };
  straight: { score: number; multiplier: number };
  flush: { score: number; multiplier: number };
  fullHouse: { score: number; multiplier: number };
  fourOfAKind: { score: number; multiplier: number };
  straightFlush: { score: number; multiplier: number };

  setCombo: (combo: string) => void;

  setHighCard: (highCard: { score: number; multiplier: number }) => void;
  setPair: (pair: { score: number; multiplier: number }) => void;
  setTwoPairs: (twoPairs: { score: number; multiplier: number }) => void;
  setThreeOfAKind: (threeOfAKind: {
    score: number;
    multiplier: number;
  }) => void;
  setStraight: (straight: { score: number; multiplier: number }) => void;
  setFlush: (flush: { score: number; multiplier: number }) => void;
  setFullHouse: (fullHouse: { score: number; multiplier: number }) => void;
  setFourOfAKind: (fourOfAKind: { score: number; multiplier: number }) => void;
  setStraightFlush: (straightFlush: {
    score: number;
    multiplier: number;
  }) => void;
  increaseHighCard: () => void;
  increasePair: () => void;
  increaseTwoPairs: () => void;
  increaseThreeOfAKind: () => void;
  increaseStraight: () => void;
  increaseFlush: () => void;
  increaseFullHouse: () => void;
  increaseFourOfAKind: () => void;
  increaseStraightFlush: () => void;
}

export const useComboStore = create<ComboStore>((set) => ({
  combo: "",
  highCard: { score: 5, multiplier: 1 },
  pair: { score: 10, multiplier: 2 },
  twoPairs: { score: 20, multiplier: 2 },
  threeOfAKind: { score: 20, multiplier: 3 },
  straight: { score: 30, multiplier: 3 },
  flush: { score: 40, multiplier: 3 },
  fullHouse: { score: 40, multiplier: 4 },
  fourOfAKind: { score: 60, multiplier: 5 },
  straightFlush: { score: 100, multiplier: 8 },
  increaseHighCard: () =>
    set((state) => ({
      highCard: {
        score: state.highCard.score + 10,
        multiplier: state.highCard.multiplier + 1,
      },
    })),
  increasePair: () =>
    set((state) => ({
      pair: {
        score: state.pair.score + 15,
        multiplier: state.highCard.multiplier + 1,
      },
    })),
  increaseTwoPairs: () =>
    set((state) => ({
      twoPairs: {
        score: state.twoPairs.score + 20,
        multiplier: state.highCard.multiplier + 1,
      },
    })),
  increaseThreeOfAKind: () =>
    set((state) => ({
      threeOfAKind: {
        score: state.threeOfAKind.score + 20,
        multiplier: state.highCard.multiplier + 2,
      },
    })),
  increaseStraight: () =>
    set((state) => ({
      straight: {
        score: state.straight.score + 30,
        multiplier: state.highCard.multiplier + 3,
      },
    })),
  increaseFlush: () =>
    set((state) => ({
      flush: {
        score: state.flush.score + 15,
        multiplier: state.highCard.multiplier + 2,
      },
    })),
  increaseFullHouse: () =>
    set((state) => ({
      fullHouse: {
        score: state.fullHouse.score + 25,
        multiplier: state.highCard.multiplier + 2,
      },
    })),
  increaseFourOfAKind: () =>
    set((state) => ({
      fourOfAKind: {
        score: state.fourOfAKind.score + 30,
        multiplier: state.highCard.multiplier + 3,
      },
    })),
  increaseStraightFlush: () =>
    set((state) => ({
      straightFlush: {
        score: state.straightFlush.score + 40,
        multiplier: state.highCard.multiplier + 4,
      },
    })),

  setHighCard: (highCard) => set({ highCard }),
  setPair: (pair) => set({ pair }),
  setTwoPairs: (twoPairs) => set({ twoPairs }),
  setThreeOfAKind: (threeOfAKind) => set({ threeOfAKind }),
  setStraight: (straight) => set({ straight }),
  setFlush: (flush) => set({ flush }),
  setFullHouse: (fullHouse) => set({ fullHouse }),
  setFourOfAKind: (fourOfAKind) => set({ fourOfAKind }),
  setStraightFlush: (straightFlush) => set({ straightFlush }),
  setCombo: (combo) => set({ combo }),
}));
