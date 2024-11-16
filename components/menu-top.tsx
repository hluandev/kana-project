export const MenuTop = () => {
  return (
    <div className="flex justify-between p-12">
      <div className=" bg-red-600 p-3 rounded-lg">
        <img src="/img/logo.svg" className="w-60" alt="" />
      </div>

      <div className="flex bg-white/20 backdrop-blur-xl  border">
        <div className="h-full aspect-square bg-white text-black flex justify-center text-xl font-bold items-center">
          13
        </div>
        <div className="w-52 pl-3 uppercase font-semibold flex items-center text-lg">
          Ruan
        </div>
      </div>
    </div>
  );
};
