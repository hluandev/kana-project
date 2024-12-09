"use client";

import ActionInput from "./action-input";
import { DiscardSelected } from "./buttons/discard-selected";
import { PlaySelected } from "./buttons/play-selected";

export const ActionsHand = () => {
  return (
    <div className="lg:mt-4 mt-2 relative flex h-full bg-white border border-black/10 shadow-sm rounded-full lg:p-2 p-1">
      <DiscardSelected />
      <ActionInput />
      <PlaySelected />
    </div>
  );
};
