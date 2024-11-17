import { login } from "@/actions/auth";

const Login = () => {
  return (
    <div className=" h-full bg-pink-900 flex justify-center items-center">
      <form className="flex flex-col gap-3 text-black p-4 bg-black rounded-md">
        <input name="email" id="email" type="email" placeholder="Email" />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
        <input formAction={login} type="submit" className="text-white" />
      </form>
    </div>
  );
};

export default Login;
