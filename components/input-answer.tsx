export const InputAnswer = () => {
  return (
    <form className="absolute bottom-32  shadow-xl">
      <input
        className="bg-black/80 text-2xl py-3 px-3.5 outline-none rounded-md w-96"
        type="text"
      />
      <input className="hidden" type="submit" />
    </form>
  );
};
