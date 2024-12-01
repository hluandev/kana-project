import { createClient } from "@/utils/supabase/server_service_role";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(request: Request) {
  // 1. Verify Stripe webhook signature
  const body = await request.text();
  const signature = headers().get("Stripe-Signature")!;

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // 2. Handle checkout completion
    if (event.type === "checkout.session.completed") {
      await handleCheckoutComplete(
        event.data.object as Stripe.Checkout.Session
      );
    }

    return new Response("Webhook processed", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Webhook error", { status: 400 });
  }
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId;
  if (!userId) {
    throw new Error("No userId found in session metadata");
  }

  const supabase = await createClient();

  // Verify user exists and update their stripe customer id
  const { error } = await supabase
    .from("profiles")
    .update({ stripe_customer_id: session.customer as string })
    .eq("id", userId);

  if (error) {
    throw new Error(`Failed to update profile: ${error.message}`);
  }
}
