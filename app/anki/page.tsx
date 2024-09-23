const Anki = () => {
  return (
    <div className="relative h-full">
      <div className="relative flex justify-between">
        <div className="">
          <p className="font-semibold text-lg">TheLoong</p>
          <div className=" bg-gradient-to-t w-72 font-semibold from-[#df1818] to-red-800 border border-yellow-300  rounded-sm text-xl text-white text-center py-1">
            100
          </div>
        </div>

        <div className="text-6xl absolute left-1/2 -translate-x-1/2 font-semibold leading-none">
          10
        </div>

        <div className="">
          <p className="font-semibold text-lg text-right">本</p>
          <div className=" bg-gradient-to-t w-72 font-semibold from-purple-600 to-purple-900 border border-yellow-300  rounded-sm text-xl text-white text-center py-1">
            20
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2">
        <p className="text-6xl font-medium text-center">本</p>
        <img src="/img/book.webp" className="h-96  rounded-3xl mt-10" alt="" />
      </div>

      <form
        action=""
        className=" left-1/2 -translate-x-1/2 absolute  bottom-20 space-x-2"
      >
        <input
          type="text"
          placeholder="Type here"
          className="bg-[#f6f6f6] w-96 text-center  shadow-inner outline-none rounded-lg border border-neutral-300 py-3 px-4"
        />
        <input
          value={"Attack"}
          type="submit"
          className="bg-blue-500 text-white font-semibold p-3 w-24 rounded-md"
        />
      </form>
    </div>
  );
};

export default Anki;
