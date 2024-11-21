"use client";

import { useKanaStore } from "@/store/useKanaStore";
import CardHand from "./card-hand";
import { useEffect, useState } from "react";

export default function Hands() {
  const { kana } = useKanaStore();

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <CardHand key={index} kana={kana[index]} />
        ))}
      </div>

      <div className="flex gap-4">
        <button className="bg-neutral-800 p-2 rounded-lg">Discard</button>
        <button className="bg-blue-700 p-2 rounded-lg">Play Hand</button>
      </div>
    </div>
  );
}
