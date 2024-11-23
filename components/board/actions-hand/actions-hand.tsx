"use client";

import { DiscardSelected } from "./buttons/discard-selected";
import { PlaySelected } from "./buttons/play-selected";
import { SortCurrentHand } from "./buttons/sort-current-hand";

export const ActionsHand = () => {
  return (
    <div className="flex justify-center p-3 mt-6 gap-3 w-fit h-fit bg-[#1e2022] border border-[#2e3032] rounded-lg">
      <DiscardSelected />
      <SortCurrentHand />
      <PlaySelected />
    </div>
  );
};
