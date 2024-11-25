"use client";

import ActionInput from "./action-input";
import { DiscardSelected } from "./buttons/discard-selected";
import { PlaySelected } from "./buttons/play-selected";

export const ActionsHand = () => {
  return (
    <div className="mt-6">
      <ActionInput />
      <div className="flex justify-center mt-3 gap-3 w-fit h-fit ">
        <DiscardSelected />
        {/* <SortCurrentHand /> */}
        <PlaySelected />
      </div>
    </div>
  );
};
