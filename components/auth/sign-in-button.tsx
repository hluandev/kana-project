"use client";

import { LoaderCircleIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  brand: string;
  icon: React.ReactNode;
  signInWith?: () => Promise<{ data: { url: string } }>;
}

export const SignInButton = ({ brand, signInWith, icon }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      if (signInWith) {
        const { data } = await signInWith();
        // Supabase will handle the redirect automatically
        if (data?.url) {
          window.location.href = data.url;
        }
      } else {
        console.error("signInWith function is not defined.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button
      className="bg-white hover:bg-neutral-100 duration-200 flex justify-center items-center w-64 text-[0.9rem] rounded-md h-11 border border-black/15 shadow-sm"
      onClick={handleSignIn}
    >
      {loading ? (
        <LoaderCircleIcon className="animate-spin" />
      ) : (
        <div className="flex items-center gap-3">
          {icon}

          <p className="leading-none">Login with {brand}</p>
        </div>
      )}
    </button>
  );
};