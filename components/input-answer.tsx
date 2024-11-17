export const InputAnswer = () => {
  return (
    <form className="absolute bottom-32 shadow-xl">
      <input
        placeholder="Answer here"
        className="bg-white/20 backdrop-blur-lg border border-neutral-500 placeholder:text-white/30 text-center text-2xl py-3 px-3.5 outline-none rounded-lg w-96"
        type="text"
      />
      <input className="hidden" type="submit" />
    </form>
  );
};
