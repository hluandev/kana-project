import { Panel } from "./Panel";
import { Screen } from "./Screen";

export const Main = () => {
  return (
    <div className="col-span-10 h-full py-3 pr-3">
      <div className="bg-white h-full border border-neutral-300 overflow-hidden rounded-xl  grid grid-cols-12">
        <Screen />
        <Panel />
      </div>
    </div>
  );
};
