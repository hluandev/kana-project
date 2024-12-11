"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarSyncIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";

export default function ManageSubscription() {
  const [loading, setLoading] = useState(false);
  const [toolTip, setTooltip] = useState(false);
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
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      disabled={loading}
      className="z-10 relative border-b flex items-center p-3 gap-2"
    >
      <AnimatePresence>
        {toolTip && (
          <motion.p
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="hover:bg-gray-100 absolute -top-10 bg-white w-40 p-2 border   left-1/2 -translate-x-1/2 flex justify-center items-center rounded-lg"
          >
            {error ? (
              error
            ) : loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              "Manage Subscription"
            )}
          </motion.p>
        )}
      </AnimatePresence>

      <CalendarSyncIcon strokeWidth={1.7} className="w-4 h-4" />
    </button>
  );
}
