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
      className="mainBgColor hover:bg-yellow-600/40 py-2.5 w-full flex items-center justify-center text-center font-semibold rounded-md"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Upgrade to Premium"}
    </button>
  );
}
