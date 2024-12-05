import { useEffect, useState } from "react";

export function useSubscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await fetch("/api/stripe/status");
        const { isSubscribed } = await response.json();
        setIsSubscribed(isSubscribed);
      } catch (err) {
        setError("Failed to check subscription status");
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, []);

  return { isSubscribed, loading, error };
}
