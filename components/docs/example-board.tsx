export const ExampleBoard = () => {
  return (
    <div className="grid grid-cols-12 gap-2 h-[40rem] bg-black/10 text-sm rounded-2xl p-2">
      <div className="col-span-2 bg-white/50 rounded-xl p-2 space-y-2">
        <div className="grid grid-cols-2 text-center items-center  bg-white rounded-full p-1">
          <div className="bg-[#f2f3f7] rounded-full p-2">Hiragana</div>
          <div>Katakana</div>
        </div>

        <div className="h-32 flex items-end w-full p-2 rounded-lg bg-white">
          <div className="h-8 rounded-full w-full bg-[#f2f3f7] flex items-center justify-center font-semibold">
            0/300
          </div>
        </div>

        <div className="h-32 flex flex-col justify-between font-semibold w-full gap-2 p-2 rounded-lg bg-white">
          <div className="space-y-2">
            <p>High Card</p>
            <p>0</p>
          </div>
          <div className="flex gap-2">
            <div className="h-8 rounded-full w-full bg-[#f2f3f7] flex items-center justify-center font-semibold">
              0
            </div>
            <div className="h-8 rounded-full w-full bg-[#f2f3f7] flex items-center justify-center font-semibold">
              0
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-10 flex flex-col justify-between items-center">
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-40 w-28 bg-[#efcb68] rounded-lg"></div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-8 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="h-40 w-28 bg-white rounded-lg"></div>
            ))}
          </div>

          <div className="w-40 p-1 flex justify-between h-8 mt-2 bg-white overflow-hidden rounded-full">
            <div className="w-6 aspect-square bg-[#f2f3f7] rounded-full flex justify-center items-center">
              1
            </div>
            <div className="w-6 aspect-square bg-green-600 text-white rounded-full flex justify-center items-center">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
