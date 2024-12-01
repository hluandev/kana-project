import { Doc } from "@/components/docs/doc";
import { ExampleBoard } from "@/components/docs/example-board";

export default function Rules() {
  return (
    <Doc title="2. Rules">
      <div className="">
        <p>
          The objective of the game is to have the best hand in order to clear
          the round. Let's look at the example of this board.
        </p>
      </div>

      <ExampleBoard />
    </Doc>
  );
}
