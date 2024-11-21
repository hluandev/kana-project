import { useKanaStore } from "@/store/useKanaStore";
import { useState } from "react";

interface CardHandProps {
  kana: {
    id: number;
    japanese: string;
    suit: string;
    romaji: string;
  };
}

export default function CardHand({ kana }: CardHandProps) {
  const [clicked, setClicked] = useState(false);
  const { readyHand, addToReadyHand, removeFromReadyHand } = useKanaStore();

  return (
    <div
      onClick={() => {
        if (clicked) {
          removeFromReadyHand(kana.id);
          setClicked(false);
        } else if (readyHand.length < 5) {
          addToReadyHand(kana);
          setClicked(true);
        }
      }}
      className={`h-52 cursor-pointer relative w-32  p-1.5 ${
        clicked ? "bg-blue-600 -mt-10" : "bg-neutral-800"
      }  border border-neutral-700 duration-300 rounded-md`}
    >
      <p className="font-mono  bg-neutral-700 border border-neutral-600  h-6 w-6 flex justify-center items-center rounded-md">
        {kana.suit}
      </p>
      <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl">
        {kana.japanese}
      </p>
    </div>
  );
}
