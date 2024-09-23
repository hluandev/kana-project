import { Swords, ListIcon, Diamond, ListCheck, Sword } from "lucide-react";

const Anki = () => {
  return (
    <div className="relative h-full ">
      <div className="absolute space-y-10 left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2">
        <p className="text-6xl font-medium text-center">本</p>
        <img src="/img/book.webp" className="h-96  rounded-3xl" alt="" />
      </div>

      <form
        action=""
        className=" left-1/2 -translate-x-1/2 absolute  bottom-20 space-x-2"
      >
        <input
          type="text"
          placeholder="Attack"
          className="bg-[#f6f6f6] w-96 text-center  shadow-inner outline-none rounded-lg border border-neutral-300 py-3 px-4"
        />
        <input
          value={"Fight "}
          type="submit"
          className="bg-blue-500 text-white font-semibold p-3 w-24 rounded-md"
        />
      </form>
    </div>
  );
};

export default Anki;
