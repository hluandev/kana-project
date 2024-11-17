export const MenuTop = () => {
  return (
    <div className="flex justify-between p-12">
      <img src="/img/logo.svg" className="w-60" alt="" />

      <div className="flex bg-white/20 backdrop-blur-xl  border">
        <div className="h-full aspect-square bg-white text-black flex justify-center text-xl font-bold items-center">
          13
        </div>
        <div className="w-60 pl-3 uppercase font-semibold flex items-center text-lg">
          Ruan
        </div>
      </div>
    </div>
  );
};
