"use client";

import { signInWithGoogle } from "@/actions/server/google-login";

import { signup } from "@/actions/server/use-server/sign-up";
import { SignInButton } from "@/components/auth/sign-in-button";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <div className="grid lg:grid-cols-2 h-full">
      <div className="max-lg:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/kamikana.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center h-full max-w-sm mx-auto">
        <svg
          width="60"
          height="60"
          viewBox="0 0 999 999"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="998.141" height="998.141" rx="240" fill="black" />
          <path
            d="M686 469.83C686 448.922 678.943 434.547 664.83 426.707C659.043 423.368 652.877 421.688 646.331 421.666C637.802 421.694 628.733 424.423 619.123 429.856C618.679 430.117 618.233 430.374 617.786 430.627V509.034V744.254L686 705.05V469.83Z"
            fill="white"
          />
          <path
            d="M448.428 293.415L380.214 332.618V881.465L448.428 842.262V607.042V528.635V449.956V293.415Z"
            fill="white"
          />
          <path
            d="M549.572 548.509L617.786 509.034V430.627L448.428 528.635V607.042L549.572 548.509Z"
            fill="white"
          />
          <path
            d="M686 156.203L617.786 195.407V430.627C618.233 430.364 618.679 430.107 619.123 429.856C626.786 425.347 634.018 419.547 640.82 412.457C644.227 408.906 647.526 405.031 650.717 400.832C661.171 387.242 669.535 372.606 675.807 356.925C682.602 341.243 686 326.607 686 313.017V156.203Z"
            fill="white"
          />
          <path
            d="M380.214 332.618L448.428 293.415M380.214 332.618V881.465M380.214 332.618L312 293.415M448.428 293.415L380.214 254.212L312 293.415M448.428 293.415V449.956M448.428 528.635V449.956M448.428 528.635V607.042M448.428 528.635L617.786 430.627M617.786 430.627L549.572 391.424M617.786 430.627C618.233 430.374 618.679 430.117 619.123 429.856M617.786 430.627C618.233 430.364 618.679 430.107 619.123 429.856M617.786 430.627V509.034M617.786 430.627V195.407M617.786 195.407L686 156.203M617.786 195.407L549.572 156.203M686 156.203V313.017C686 326.607 682.602 341.243 675.807 356.925C669.535 372.606 661.171 387.242 650.717 400.832C647.526 405.031 644.227 408.906 640.82 412.457M686 156.203L617.786 117L549.572 156.203M617.786 744.254L686 705.05V469.83C686 448.922 678.943 434.547 664.83 426.707C659.043 423.368 652.877 421.688 646.331 421.666M617.786 744.254V509.034M617.786 744.254L549.572 705.05V548.509M617.786 509.034L549.572 548.509M448.428 607.042V842.262L380.214 881.465M448.428 607.042L549.572 548.509M380.214 881.465L312 842.262V293.415M549.572 391.424V156.203M549.572 391.424L448.428 449.956M646.331 421.666C653.099 421.645 659.527 423.325 665.614 426.707L640.82 412.457M646.331 421.666C637.802 421.694 628.733 424.423 619.123 429.856M646.331 421.666C637.892 421.639 628.823 424.369 619.123 429.856M640.82 412.457C634.018 419.547 626.786 425.347 619.123 429.856"
            stroke="white"
            stroke-width="9.57405"
          />
        </svg>

        <div className=" bg-neutral-800 shadow-inner p-6 gap-2 rounded-xl flex flex-col">
          {emailOpen && confirmEmail === "" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action=""
              className="flex flex-col gap-2 "
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-64 placeholder:text-neutral-500 bg-neutral-700 h-11 outline-none rounded-md border border-white/10 "
                type="email"
                name="email"
                placeholder="Email"
              />

              <button
                onClick={async () => {
                  setLoading(true);
                  await signup({ email });
                  setConfirmEmail("confirm");
                  setLoading(false);
                }}
                className="w-64 h-11 bg-neutral-700 hover:bg-neutral-600 duration-200 flex justify-center items-center rounded-md  border border-white/10 "
                type="submit"
              >
                {loading ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          )}

          {confirmEmail === "confirm" && (
            <p className="">Please check your email for the magic link</p>
          )}

          {!emailOpen && (
            <SignInButton
              onClick={() => setEmailOpen(true)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
              brand="Email"
            />
          )}
          {!emailOpen && (
            <SignInButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              }
              brand="Google"
              signInWith={signInWithGoogle}
            />
          )}
        </div>

        <div className="text-xs text-center max-w-xs  text-white/60">
          By continuing, you agree to Kamikana&apos;s{" "}
          <a
            href="https://www.kamikana.com/terms"
            target="_blank"
            className="underline"
          >
            Terms of Service
          </a>
          , and acknowledge the{" "}
          <a
            href="https://www.kamikana.com/privacy"
            target="_blank"
            className="underline"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}
