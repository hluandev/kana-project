"use client";

import { SubscriptionButton } from "../subscription-button";
import { SupportBox } from "./support-box";
import { usePlayerStore } from "@/stores/usePlayerStore";

export const Support = () => {
  const { isSubscribed } = usePlayerStore();

  return (
    <>
      {!isSubscribed && (
        <div
          className={`text-black p-2 pb-3  w-full z-20 bg-[#efcb68] bg-opacity-40 border border-black/10 shadow-sm rounded-xl`}
        >
          <div className="space-y-3">
            <SubscriptionButton />

            <div className="flex flex-col font-medium  gap-[10px]">
              <SupportBox text="Support this project." />
              <SupportBox text="Gain early access to Stage 2 as soon as it's ready." />
              <SupportBox text="Unlock Endless Mode." />
              <SupportBox text="Unlock the level cap at 10." />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
