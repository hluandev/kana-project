"use client";

import ActionInput from "./action-input";
import { DiscardSelected } from "./buttons/discard-selected";
import { PlaySelected } from "./buttons/play-selected";

export const ActionsHand = () => {
  return (
    <div className="mt-4 flex h-full bg-white border border-black/10 shadow-sm rounded-full p-2">
      <DiscardSelected />
      <ActionInput />
      <PlaySelected />
    </div>
  );
};
