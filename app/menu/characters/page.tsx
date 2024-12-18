"use client";

import { CharacterBox } from "@/components/characters/character-box";
import { usePlayerStore } from "@/stores/usePlayerStore";

export default function Characters() {
  const { info } = usePlayerStore();

  return (
    <div className="grid grid-cols-5 grid-rows-2 w-full h-full gap-2 py-2 pr-2">
      {info.owned_characters.map((item: any, index) => (
        <CharacterBox name={item} videoSrc={`${item}.mp4`} key={index} />
      ))}

      <div className="bg-neutral-900 box-border "></div>
      <div className="bg-neutral-900 box-border"></div>
      <div className="bg-neutral-900 box-border"></div>
      <div className="bg-neutral-900 box-border"></div>
      <div className="bg-neutral-900 box-border"></div>
      <div className="bg-neutral-900 box-border"></div>
    </div>
  );
}
