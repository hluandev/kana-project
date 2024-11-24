"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";
import { useEffect } from "react";

export const CurrentHand = () => {
  const { kana, drawHand, currentHand, currentDeck, drawSpecial } =
    useKanaStore();

  useEffect(() => {
    drawHand();
    drawSpecial();
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
