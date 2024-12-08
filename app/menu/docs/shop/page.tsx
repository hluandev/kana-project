import { Doc } from "@/components/docs/doc";
import DocDesc from "@/components/docs/doc-desc";
import { ExampleBoard } from "@/components/docs/example-board";

export default function Shop() {
  return (
    <Doc title="4. Shop">
      {/* <ExampleBoard shop /> */}

      <div className="font-medium  mx-auto max-w-2xl space-y-10 pb-10 pt-4">
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
          <p>
            When you buy a new special card, it will be added to your hand and
            removed from the shop, except for upgrade cards.
          </p>
          <p>
            If you sell a special card (excluding upgrade cards), it will be
            returned to the shop.
          </p>
        </DocDesc>

        <DocDesc title="3. Move special cards">
          <p>
            During shopping, you can move your selected special cards from your
            current special hand to another location within your current special
            hand.
          </p>
          <p>- Select the card you want to move.</p>
          <p>- Press the number (5, 6, 7, 8, 9) you want to move it to.</p>

          <p>
            {" "}
            Positions of the cards are important in this game. It is calculated
            from left to right.
          </p>
          <p>
            For example, with a x2 multiplier and a +5 multiplier (left to
            right) for a high card hand: playing the hand gives a multiplier of
            7. Switching their positions increases it to 12.
          </p>
        </DocDesc>

        <DocDesc title="4. Rerolling">
          <p>
            Click on reroll(3) to reroll your current hand. Each reroll costs
            ¥200.
          </p>
        </DocDesc>

        <DocDesc title="5. Freezing cards">
          <p>
            Click on snowflake(4) to freeze your selected special cards.
            Freezing is free.
          </p>
        </DocDesc>
      </div>
    </Doc>
  );
}
