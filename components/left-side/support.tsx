"use client";

import { SubscriptionButton } from "../subscription-button";
import { SupportBox } from "./support-box";
import { usePlayerStore } from "@/stores/usePlayerStore";

export const Support = () => {
  const { isSubscribed } = usePlayerStore();

  return (
    <>
      {!isSubscribed && (
        <div className={`p-2 pb-3 bg-purple-600/30 w-full z-20 rounded-xl`}>
          <div className="space-y-2">
            <SubscriptionButton />

            <div className="flex flex-col font-medium  gap-[10px]">
              <SupportBox text="Support this project." />
              <SupportBox text="Gain early access to Gate 3 (Kanji) as soon as it's ready." />
              <SupportBox text="Unlock Endless Mode." />
              <SupportBox text="Unlock the level cap at 10." />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
