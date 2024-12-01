"use server";

import { createClient } from "@/utils/supabase/server";

export async function checkStripeSubscription() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user?.id)
      .single();

    const response = await fetch("/api/stripe/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: profile?.stripe_customer_id }),
    });

    const data = await response.json();
    return data.isSubscribed;
  } catch (error) {
    console.error("Error checking subscription:", error);
    return false;
  }
}
