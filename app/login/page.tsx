const Login = () => {
  return (
    <div className=" h-full bg-pink-900 flex justify-center items-center">
      <form
        action=""
        className="flex flex-col gap-3 text-black p-4 bg-black rounded-md"
      >
        <input type="email" />
        <input type="password" />
        <input type="submit" className="text-white" />
      </form>
    </div>
  );
};

export default Login;
