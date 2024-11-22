"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { Card } from "./card";

export const CurrentHand = () => {
  const { kana } = useKanaStore();

  console.log(kana);
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <Card text={item.toString()} key={index} />
      ))}
    </div>
  );
};
