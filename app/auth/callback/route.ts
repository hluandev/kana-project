import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Error exchanging code for session:", error);
      return NextResponse.redirect(new URL("/login", requestUrl.origin));
    }

    // Verify the session was created and user exists
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    console.log("user", user);

    if (userError || !user) {
      console.error("Error getting user:", userError);
      return NextResponse.redirect(new URL("/login", requestUrl.origin));
    }

    // Successfully authenticated
    return NextResponse.redirect(new URL("/menu", requestUrl.origin));
  }

  // If no code present, redirect to login
  return NextResponse.redirect(new URL("/login", requestUrl.origin));
}
