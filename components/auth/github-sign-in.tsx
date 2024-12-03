"use client";

import { signInWithGithub } from "@/actions/server/google-login";

export default function GithubSignIn() {
  const handleSignIn = async () => {
    try {
      const { data } = await signInWithGithub();
      // Supabase will handle the redirect automatically
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return <button onClick={handleSignIn}>GithubSignIn</button>;
}
