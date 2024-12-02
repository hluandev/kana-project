import { Doc } from "@/components/docs/doc";
import { ExampleBoard } from "@/components/docs/example-board";

export default function Shop() {
  return (
    <Doc title="4. Shop">
      <p className="text-lg font-semibold">
        Shop is where you can buy or sell special cards to enhance your hands to
        be more powerful.
      </p>

      <div className="h-full font-medium text-lg grid grid-cols-3 gap-2">
        <p className="h-20 bg-white flex p-2 text-center justify-center items-center rounded-xl">
          After each round, you earn ¥500.
        </p>
        <p className="h-20 bg-white flex p-2 text-center justify-center items-center rounded-xl">
          Unused turns are rewarded with ¥100 each.
        </p>
        <p className="h-20 bg-white flex p-2 text-center    justify-center items-center rounded-xl">
          Buying a special card costs ¥500.
        </p>
        <p className="h-20 bg-white flex p-2 text-center    justify-center items-center rounded-xl">
          Selling a special card back to the shop gives you ¥300.
        </p>
        <p className="h-20 bg-white flex p-2 text-center    justify-center items-center rounded-xl">
          Rerolling costs ¥100.
        </p>
        <p className="h-20 bg-white flex p-2 text-center    justify-center items-center rounded-xl">
          Freezing cards is free.
        </p>
      </div>

      <ExampleBoard shop />
    </Doc>
  );
}
