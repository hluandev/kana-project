import { checkSubscription } from "@/actions/server/check-subscription";
import CancelSubscription from "@/components/subscriptions/cancel-subscription";

export default async function Player() {
  const isSubscribed = await checkSubscription();
  return (
    <div className="z-10">
      <CancelSubscription />
      <p className="text-2xl">
        {isSubscribed ? "Subscribed" : "Not Subscribed"}
      </p>
    </div>
  );
}
