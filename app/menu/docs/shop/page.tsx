import { Doc } from "@/components/docs/doc";
import DocDesc from "@/components/docs/doc-desc";
import { ExampleBoard } from "@/components/docs/example-board";

export default function Shop() {
  return (
    <Doc title="4. Shop">
      <ExampleBoard shop />

      <div className="font-medium  mx-auto max-w-2xl space-y-16 pb-10 pt-4">
        <DocDesc title="1. Buying and selling">
          <p>
            Select special cards by simply typing the card&apos;s romaji. press
            (1) to sell your current special cards or press (2) to buy new
            specials.
          </p>
        </DocDesc>

        <DocDesc title="2. Rerolling">
          <p>Press (3) to reroll your current hand. Each reroll costs ¥100.</p>
        </DocDesc>

        <DocDesc title="3. Freezing cards">
          <p>
            Press (4) to freeze your selected special cards. Freezing is free.
          </p>
        </DocDesc>
      </div>
    </Doc>
  );
}
