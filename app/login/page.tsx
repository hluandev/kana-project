import GithubSignIn from "@/components/auth/github-sign-in";
import GoogleSignIn from "@/components/auth/google-sign-in";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-full max-w-sm mx-auto">
      <GoogleSignIn />
      <GithubSignIn />
    </div>
  );
}
