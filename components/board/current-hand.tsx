"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { useEffect } from "react";

export const CurrentHand = () => {
  const { kana, drawHand, currentHand, currentDeck } = useKanaStore();

  // const drawHand = () => {
  //   const newHand = [];
  //   const currentDecks = [...kana];

  //   for (let i = 0; i < 8 && currentDecks.length > 0; i++) {
  //     const randomIndex = Math.floor(Math.random() * currentDecks.length);
  //     newHand.push(currentDecks.splice(randomIndex, 1)[0]);
  //   }

  //   newHand.sort((a, b) => {
  //     if (a.rank < b.rank) return -1;
  //     if (a.rank > b.rank) return 1;
  //     return 0;
  //   });

  //   setCurrentHand(newHand);
  //   setCurrentDeck(currentDecks);
  // };

  useEffect(() => {
    drawHand();
  }, [kana]);

  return (
    <div className="flex gap-2">
      {currentHand?.map((item) => (
        <Card card={item} key={item.id} />
      ))}

      <div className="absolute right-10 bottom-10 bg-[#1e2022] rounded-full border border-[#2e3032] text-xl font-bold font-mono h-14 w-14 flex items-center justify-center">
        {currentDeck.length}
      </div>
    </div>
  );
};
