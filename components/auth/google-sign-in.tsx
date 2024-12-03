"use client";

import { signInWithGoogle } from "@/actions/server/google-login";

export default function GoogleSignIn() {
  return <button onClick={() => signInWithGoogle()}>GoogleSignIn</button>;
}
