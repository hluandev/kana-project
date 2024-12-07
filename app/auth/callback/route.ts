import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Verify session was created
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        // For development
        if (process.env.NODE_ENV === "development") {
          return NextResponse.redirect(`${origin}${next}`);
        }

        // For production
        const forwardedHost = request.headers.get("x-forwarded-host");
        if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`);
        }

        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // If something went wrong, redirect to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_callback_error`);
}
