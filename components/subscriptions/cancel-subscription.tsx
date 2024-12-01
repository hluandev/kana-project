"use client";

import { useState } from "react";

export default function CancelSubscription() {
  const [loading, setLoading] = useState(false);

  const handleCancel = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/stripe/cancel", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to cancel subscription");
      }

      // Refresh the page or update the UI as needed
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-10">
      <button
        onClick={handleCancel}
        disabled={loading}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
      >
        {loading ? "Processing..." : "Cancel Subscription"}
      </button>
    </div>
  );
}
