"use client";

import { useKanaStore } from "@/store/useKanaStore";
import CardHand from "./card-hand";
import { useEffect, useState } from "react";

export default function Hands() {
  const { kana, readyHand, removeFromDeck } = useKanaStore();

  const [hand, setHand] = useState(() => {
    const shuffled = [...kana].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8);
  });

  const handlePlayHand = () => {
    const cardIds = readyHand.map((card) => card.id);
    removeFromDeck(cardIds);
  };

  useEffect(() => {
    setHand(() => {
      const shuffled = [...kana].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 8);
    });
  }, [kana]);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-2">
        {hand.map((card) => (
          <CardHand key={card.id} kana={card} />
        ))}
      </div>

      <div className="flex gap-4">
        <button className="bg-neutral-800 p-2 rounded-lg">Discard</button>
        <button onClick={handlePlayHand} className="bg-blue-700 p-2 rounded-lg">
          Play Hand
        </button>
      </div>
    </div>
  );
}
