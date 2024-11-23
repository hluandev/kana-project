"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { useEffect } from "react";

export const CurrentHand = () => {
  const { kana, setCurrentHand, currentHand, setCurrentDeck } = useKanaStore();

  const drawHand = () => {
    const newHand = [];
    const currentDecks = [...kana];

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * currentDecks.length);
      newHand.push(currentDecks.splice(randomIndex, 1)[0]);
    }

    newHand.sort((a, b) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });

    setCurrentHand(newHand);
    setCurrentDeck(currentDecks);
  };

  useEffect(() => {
    drawHand();
  }, [kana]);

  return (
    <div className="flex gap-2">
      {currentHand?.map((item, index) => (
        <Card card={item} key={index} />
      ))}
    </div>
  );
};
