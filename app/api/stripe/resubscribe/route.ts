import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Get user's stripe_customer_id from profiles
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    if (!profile?.stripe_customer_id) {
      return Response.json(
        { message: "No customer record found" },
        { status: 404 }
      );
    }

    // Create a new checkout session for the existing customer
    const session = await stripe.checkout.sessions.create({
      customer: profile.stripe_customer_id,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { message: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
