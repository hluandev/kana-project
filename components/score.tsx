import Card from "./card";
import ProgressiveBar from "./progressive-bar";

export default function Score() {
  return (
    <div className="space-y-4">
      <Card className="h-40 flex flex-col gap-3 justify-center items-center">
        <p className="text-2xl leading-none">Score at least</p>
        <ProgressiveBar />
        <p className="text-2xl leading-none">to earn ¥</p>
      </Card>

      <Card className="h-36 p-0 grid grid-cols-2 overflow-hidden text-3xl divide-x divide-neutral-800">
        <p className=" leading-none p-4 flex  justify-center items-center">0</p>
        <p className="leading-none bg-rose-900/20 p-4 flex justify-center items-center">
          0
        </p>
      </Card>
    </div>
  );
}
