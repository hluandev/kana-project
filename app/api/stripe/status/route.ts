import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return Response.json({ isSubscribed: false });
    }

    // Get user's stripe_customer_id from your database
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    if (!profile?.stripe_customer_id) {
      return Response.json({ isSubscribed: false });
    }

    // Get subscription status from Stripe
    const subscriptions = await stripe.subscriptions.list({
      customer: profile.stripe_customer_id,
      status: "active",
    });

    return Response.json({
      isSubscribed: subscriptions.data.length > 0,
      subscription: subscriptions.data[0] || null,
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ isSubscribed: false });
  }
}
