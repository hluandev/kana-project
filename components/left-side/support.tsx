"use client";

import { useEffect } from "react";
import { useState } from "react";
import { Box } from "../box";
import { SubscriptionButton } from "../subscription-button";
import { SupportBox } from "./support-box";
import { usePathname } from "next/navigation";

export const Support = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const checkSubscription = async () => {
      const response = await fetch("/api/stripe/status");
      const { isSubscribed } = await response.json();
      setIsSubscribed(isSubscribed);
    };

    checkSubscription();
  }, []);

  return (
    <Box
      className={`${isSubscribed && "hidden"} text-black p-4 ${
        pathname.split("/")[3] === "kana" && "fixed top-4 right-4"
      } w-72 z-20`}
    >
      <div className="space-y-4">
        <SubscriptionButton />

        <div className="flex flex-col gap-4 font-medium">
          <SupportBox text="Support this project." />
          <SupportBox text="Gain early access to Stage 2 when it is ready." />
          <SupportBox text="Unblock Endless Mode." />
          <SupportBox text="Bypass level 10." />
        </div>
      </div>
    </Box>
  );
};
