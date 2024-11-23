"use client";

import { DiscardSelected } from "./buttons/discard-selected";
import { PlaySelected } from "./buttons/play-selected";
import { SortCurrentHand } from "./buttons/sort-current-hand";

export const ActionsHand = () => {
  return (
    <div className="flex justify-center py-8 gap-6">
      <DiscardSelected />
      <SortCurrentHand />
      <PlaySelected />
    </div>
  );
};
