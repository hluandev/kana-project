import CancelSubscription from "@/components/subscriptions/cancel-subscription";

export default async function Player() {
  const response = await fetch("/api/stripe/status");
  const { isSubscribed } = await response.json();
  return (
    <div className="z-10">
      <CancelSubscription />
      <p className="text-2xl">
        {isSubscribed ? "Subscribed" : "Not Subscribed"}
      </p>
    </div>
  );
}
