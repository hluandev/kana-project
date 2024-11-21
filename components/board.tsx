"use client";

import { useKanaStore } from "@/store/useKanaStore";
import Hands from "./hands";
import SpecialHands from "./special-hands";
import { useEffect } from "react";

type Kana = {
  id: number;
  japanese: string;
  suit: string;
  romaji: string;
};

type BoardProps = {
  kana_data: Kana[] | null;
};

export default function Board({ kana_data }: BoardProps) {
  const { setKana } = useKanaStore();

  useEffect(() => {
    if (kana_data) {
      setKana(kana_data);
    }
  }, [kana_data]);

  return (
    <div className="flex flex-col justify-between h-full">
      <SpecialHands />

      <Hands />
    </div>
  );
}
