"use server";

import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export const checkIfSubBefore = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .single();

  if (!data?.stripe_customer_id) return false;

  // Check if they have any active subscriptions
  const subscriptions = await stripe.subscriptions.list({
    customer: data.stripe_customer_id,
    status: "active",
  });

  // If they have a customer ID but no active subscriptions, they're a former subscriber
  return data.stripe_customer_id && subscriptions.data.length === 0;
};
