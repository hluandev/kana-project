"use client";

import { CalendarSyncIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";

export default function ManageSubscription() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCancel = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/stripe/cancel", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to cancel subscription");
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
      onClick={handleCancel}
      disabled={loading}
      className="z-10 border-b flex items-center p-3 gap-2"
    >
      <CalendarSyncIcon strokeWidth={1.7} className="w-6 h-6" />

      <p className="hover:bg-gray-100 w-full  text-left rounded-lg">
        {error ? (
          error
        ) : loading ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          "Manage Subscription"
        )}
      </p>
    </button>
  );
}
