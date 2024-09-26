export const PlayerInfo = () => {
  return (
    <div className=" p-5 font-black rounded-2xl border-white bg-[#161716] shadow-inner-shadow-dark-float">
      <div className="flex items-center gap-2.5">
        <div className="text-3xl bg-violet-500 w-fit p-1.5 rounded-md ">42</div>
        <p className="text-4xl">Ruan</p>
      </div>

      <div className="italic bg-neutral-800 border border-neutral-700 text-center py-2 mt-4 rounded-full">
        520/1000
      </div>
    </div>
  );
};
