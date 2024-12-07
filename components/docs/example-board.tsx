import { RefreshCcwIcon, SnowflakeIcon } from "lucide-react";

interface Props {
  shop?: boolean;
}

export const ExampleBoard = ({ shop }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-2 h-[40rem] bg-black/10 text-sm rounded-2xl p-2">
      <div className="col-span-2 bg-white/50 rounded-xl p-2 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="grid grid-cols-2 border border-black/15 shadow-inner text-center items-center  bg-black/5 rounded-md p-1">
            <div className="bg-white shadow-sm border border-black/15 rounded-md p-2 ">
              Hiragana
            </div>
            <div>Katakana</div>
          </div>

          <div className="h-24 flex items-end w-full p-2 rounded-lg bg-white border border-black/15 shadow-sm">
            <div className="h-8 rounded-md border border-black/15 shadow-sm w-full bg-[#f2f3f7] flex items-center justify-center font-semibold">
              0/300
            </div>
          </div>

          <div className="h-28 flex flex-col border border-black/15 shadow-sm justify-between font-semibold w-full gap-2 p-2 rounded-lg bg-white">
            <div className="space-y-2">
              <p>High Card</p>
              <p>0</p>
            </div>
            <div className="flex gap-2">
              <div className="h-8 rounded-md border text-blue-600 border-black/15 shadow-sm w-full bg-[#f2f3f7] flex items-center justify-center font-semibold">
                0
              </div>
              <div className="h-8 rounded-md border text-red-500 border-black/15 shadow-sm w-full bg-[#f2f3f7] flex items-center justify-center font-semibold">
                0
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 bg-black/5 p-1 rounded-xl border border-black/15 shadow-inner">
          <div className="bg-white border border-black/15 shadow-sm font-medium rounded-lg  p-2 flex flex-col gap-8 justify-between">
            <p>Turns</p>
            <p className="font-semibold">4</p>
          </div>
          <div className="bg-white border border-black/15 shadow-sm font-medium rounded-lg  p-2 flex flex-col gap-8 justify-between">
            <p>Discards</p>
            <p className="font-semibold">4</p>
          </div>
          <div className="bg-white border border-black/15 shadow-sm font-medium rounded-lg  p-2 flex flex-col gap-8 justify-between">
            <p>Matches</p>
            <p className="font-semibold">1/8</p>
          </div>
          <div className="bg-white border border-black/15 shadow-sm font-medium rounded-lg  p-2 flex flex-col gap-8 justify-between">
            <p>Money</p>
            <p className="font-semibold">¥0</p>
          </div>
        </div>
      </div>

      <div className="col-span-10 flex flex-col justify-between items-center">
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-40 w-28 bg-[#efcb68] rounded-lg border border-black/15 shadow-sm"
            ></div>
          ))}
        </div>

        {!shop && (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-8 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="h-40 w-28 bg-white rounded-lg border border-black/15 shadow-sm"
                ></div>
              ))}
            </div>

            <div className="w-40 p-1 flex justify-between h-8 mt-2 bg-white border border-black/15 shadow-sm overflow-hidden rounded-full">
              <div className="w-6 h-6 aspect-square bg-[#f2f3f7] rounded-full flex justify-center items-center border border-black/15 shadow-sm">
                1
              </div>
              <div className="w-6 h-6 aspect-square bg-[#01de5b] text-white rounded-full flex justify-center items-center border border-black/15 shadow-sm">
                2
              </div>
            </div>
          </div>
        )}

        {shop && (
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-2  border border-black/15 shadow-sm bg-white/50 p-2 rounded-lg">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-40 w-28  border border-black/15 shadow-sm bg-white rounded-lg"
                  ></div>
                ))}
              </div>

              <div className="absolute top-0 space-y-2 -right-12">
                <div className="bg-[#ff915a]  border border-black/15 shadow-sm p-2 rounded-full">
                  <RefreshCcwIcon size={20} />
                </div>

                <div className="bg-blue-200 p-2  border border-black/15 shadow-sm rounded-full">
                  <SnowflakeIcon size={20} />
                </div>
              </div>
            </div>

            <div className="w-40 p-1 flex justify-between border border-black/15 shadow-sm h-8 mt-2 bg-white overflow-hidden rounded-full">
              <div className="w-6 h-6 aspect-square bg-[#e1bf62]  border border-black/15 shadow-sm text-black rounded-full flex justify-center items-center">
                1
              </div>
              <div className="w-6 h-6 aspect-square bg-[#e1bf62]  border border-black/15 shadow-sm text-black rounded-full flex justify-center items-center">
                2
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
