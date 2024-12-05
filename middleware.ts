import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { checkAndAddToLeaderboard } from "./actions/server/check-leaderboard";

export async function middleware(request: NextRequest) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    // Get user's profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", user.id)
      .single();

    // await checkAndAddToLeaderboard();

    // If user is authenticated but has no username, redirect to username page
    // except if they're already on the username page
    if (!profile?.username && request.nextUrl.pathname !== "/username") {
      return NextResponse.redirect(new URL("/username", request.url));
    }
  }

  // If user is not signed in and the current path is not /login,
  // redirect the user to /login
  if (!user && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is signed in and the current path is /login,
  // redirect the user to /menu
  if (user && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/menu/play", request.url));
  }

  return NextResponse.next();
}

// Specify which routes should be handled by the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - auth/callback
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!auth/callback|_next/static|_next/image|favicon.ico).*)",
  ],
};
