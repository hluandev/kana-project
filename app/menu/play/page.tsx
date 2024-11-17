import { PlayMode } from "@/data/play-mode";

const Play = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div className="flex gap-8">
        {PlayMode.map((item, index) => (
          <div
            key={index}
            className="bg-pink-400/70 text-center rounded-md border border-pink-500 flex-col px-10 gap-3  backdrop-blur-md h-[30rem] w-72 flex justify-center items-center text-4xl"
          >
            <p className="font-bold">{item.text}</p>
            <p className="text-lg font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Play;
