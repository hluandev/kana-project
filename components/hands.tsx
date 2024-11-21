"use client";

import { useKanaStore } from "@/store/useKanaStore";
import { useEffect, useState } from "react";
import CardHand from "./card-hand";

export default function Hands() {
  const { initKana, kanaDeck, setKanaDeck, readyHand, setReadyHand } =
    useKanaStore();
  const [hand, setHand] = useState<any[]>([]);

  useEffect(() => {
    drawHand();
  }, [initKana]);

  const drawHand = () => {
    const currentDeck = [...kanaDeck];
    const newHand = [];

    for (let i = 0; i < 8 && currentDeck.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * currentDeck.length);
      newHand.push(currentDeck.splice(randomIndex, 1)[0]);
    }

    setKanaDeck(currentDeck);
    setHand(newHand);
  };

  const playHand = () => {
    const updatedHand = hand.filter((card) => !readyHand.includes(card));

    const cardsNeeded = 8 - updatedHand.length;
    const currentDeck = [...kanaDeck];

    for (let i = 0; i < cardsNeeded && currentDeck.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * currentDeck.length);
      updatedHand.push(currentDeck.splice(randomIndex, 1)[0]);
    }

    setKanaDeck(currentDeck);
    setHand(updatedHand);
    setReadyHand([]);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-2">
        {hand.map((card) => (
          <CardHand key={card.id} kana={card} />
        ))}
      </div>

      <div className="flex gap-4">
        <button className="bg-neutral-800 p-2 rounded-lg">Discard</button>
        <button className="bg-blue-700 p-2 rounded-lg" onClick={playHand}>
          Play Hand
        </button>
      </div>
    </div>
  );
}
