import { signup } from "@/actions/auth";
import { login } from "@/actions/auth";
import GoogleSignIn from "@/components/auth/google-sign-in";

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>

      <GoogleSignIn />
    </form>
  );
}
