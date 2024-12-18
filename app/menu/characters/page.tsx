"use client";

import { CharacterBox } from "@/components/characters/character-box";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { ShieldQuestionIcon } from "lucide-react";

export default function Characters() {
  const { info } = usePlayerStore();

  return (
    <div className="grid lg:grid-cols-5 max-lg:grid-cols-2 max-lg:px-1 gap-1 grid-rows-2 w-full h-full lg:gap-2 lg:py-2 lg:pr-2">
      {info.owned_characters.map((item: any, index) => (
        <CharacterBox name={item} videoSrc={`${item}.mp4`} key={index} />
      ))}

      <div className="bg-neutral-900 box-border flex justify-center items-center">
        <ShieldQuestionIcon
          strokeWidth={0.4}
          className="h-28 w-28 text-white/30"
        />
      </div>
      <div className="bg-neutral-900 box-border flex justify-center items-center">
        <ShieldQuestionIcon
          strokeWidth={0.4}
          className="h-28 w-28 text-white/30"
        />
      </div>
      <div className="bg-neutral-900 box-border flex justify-center items-center">
        <ShieldQuestionIcon
          strokeWidth={0.4}
          className="h-28 w-28 text-white/30"
        />
      </div>
      <div className="bg-neutral-900 box-border flex justify-center items-center">
        <ShieldQuestionIcon
          strokeWidth={0.4}
          className="h-28 w-28 text-white/30"
        />
      </div>
      <div className="bg-neutral-900 box-border flex justify-center items-center">
        <ShieldQuestionIcon
          strokeWidth={0.4}
          className="h-28 w-28 text-white/30"
        />
      </div>
      <div className="bg-neutral-900 box-border flex justify-center items-center">
        <ShieldQuestionIcon
          strokeWidth={0.4}
          className="h-28 w-28 text-white/30"
        />
      </div>
    </div>
  );
}
