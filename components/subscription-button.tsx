"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

export function SubscriptionButton() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Error:", error);
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
