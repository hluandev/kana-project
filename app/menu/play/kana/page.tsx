const Kana = () => {
  return (
    <div className="flex-1 z-10 flex justify-center items-center px-12">
      <div className="grid grid-cols-4 gap-1 font-mono ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
          <div
            className={`${
              item === 5 || item === 10 ? "bg-red-800/80" : "bg-neutral-800/80"
            } hover:bg-pink-600 relative cursor-pointer text-3xl rounded-md overflow-hidden backdrop-blur-xl font-bold w-60 flex justify-center items-center aspect-video`}
            key={index}
          >
            {item === 1 && (
              <div className="text-sm absolute top-2 right-2 bg-orange-500/80 px-1.5 rounded-md">
                Current
              </div>
            )}
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kana;
