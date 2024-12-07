"use client";

import { checkIfSubBefore } from "@/actions/server/use-server/check-if-sub-before";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function SubscriptionButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      setError(null);

      const subBefore = await checkIfSubBefore();

      const endpoint = subBefore ? "/api/stripe/resubscribe" : "/api/stripe";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to process subscription");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No redirect URL received");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="bg-[#efcb68] border border-black/15 text-sm shadow-sm hover:bg-yellow-600/40 py-1.5 w-full flex items-center justify-center text-center font-medium rounded-lg"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Upgrade to Premium"}
    </button>
  );
}
