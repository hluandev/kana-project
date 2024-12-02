import { Doc } from "@/components/docs/doc";
import DocDesc from "@/components/docs/doc-desc";
import { ExampleBoard } from "@/components/docs/example-board";

export default function Shop() {
  return (
    <Doc title="4. Shop">
      <ExampleBoard shop />

      <div className="font-medium  mx-auto max-w-2xl space-y-16 pb-10 pt-4">
        <DocDesc title="1. Rewards">
          <p>
            After each round, you earn ¥500. Unused turns are rewarded with ¥100
            each.
          </p>
        </DocDesc>

        <DocDesc title="2. Buying and selling">
          <p>
            Select special cards by typing the card&apos;s romaji. Press (1) to
            sell your selected special cards, or press (2) to buy new specials.
          </p>
        </DocDesc>

        <DocDesc title="3. Move special cards">
          <p>
            During shopping, you can move your selected special cards from your
            current special hand to another location within your curent special
            hand.
          </p>
          <p>- Select the card you want to move.</p>
          <p>- Press the number (5, 6, 7, 8, 9) you want to move it to.</p>
        </DocDesc>

        <DocDesc title="4. Rerolling">
          <p>Press (3) to reroll your current hand. Each reroll costs ¥100.</p>
        </DocDesc>

        <DocDesc title="5. Freezing cards">
          <p>
            Press (4) to freeze your selected special cards. Freezing is free.
          </p>
        </DocDesc>
      </div>
    </Doc>
  );
}