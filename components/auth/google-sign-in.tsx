import { signInWithGoogle } from "@/actions/server/google-login";

export default function GoogleSignIn() {
  return <div onClick={() => signInWithGoogle()}>GoogleSignIn</div>;
}
