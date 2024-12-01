"use client";

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
    <div className="z-10">
      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
      <button
        onClick={handleCancel}
        disabled={loading}
        className="hover:bg-gray-100 w-full p-3 rounded-lg"
      >
        {loading ? "Processing..." : "Manage Subscription"}
      </button>
    </div>
  );
}
