"use client";

import ActionInput from "./action-input";
import { DiscardSelected } from "./buttons/discard-selected";
import { PlaySelected } from "./buttons/play-selected";
import { SortCurrentHand } from "./buttons/sort-current-hand";

export const ActionsHand = () => {
  return (
    <div className="mt-6">
      <ActionInput />
      <div className="flex justify-center mt-3 gap-3 w-fit h-fit ">
        <DiscardSelected />
        <SortCurrentHand />
        <PlaySelected />
      </div>
    </div>
  );
};
