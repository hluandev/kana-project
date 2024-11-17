import { InputAnswer } from "@/components/input-answer";

const Level = () => {
  return (
    <div className="flex-1 relative z-10 flex justify-center">
      <div className="flex flex-col gap-0.5 items-center h-fit">
        <div className="bg-red-600  border w-72 border-red-500 rounded-md p-2 text-center font-bold text-xl italic">
          20
        </div>
        <div className="text-7xl  bg-black/70 backdrop-blur-2xl flex justify-center items-center h-72 aspect-square rounded-md">
          あ
        </div>
      </div>
      <InputAnswer />

      <div className="absolute space-y-0.5 left-0 bottom-0 -skew-y-6 p-12">
        <div className="font-bold text-2xl">100</div>

        <div className="flex gap-0.5  bg-black/50 p-0.5 rounded-md">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="w-10 aspect-square p-2 rounded-md font-bold text-2xl text-center italic bg-blue-500"></div>
          ))}
        </div>

        <div className="text-2xl font-bold bg-black/50 py-1 px-2 rounded-md">
          Ruan
        </div>
      </div>
    </div>
  );
};

export default Level;
