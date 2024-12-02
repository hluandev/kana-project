import { Doc } from "@/components/docs/doc";
import DocDesc from "@/components/docs/doc-desc";
import { ExampleBoard } from "@/components/docs/example-board";

export default function Rules() {
  return (
    <Doc title="2. Rules">
      <div className="">
        <p>
          The objective of the game is to have the best hand in order to clear
          the round. Let&apos;s look at the example of this board.
        </p>
      </div>

      <ExampleBoard />

      <div className="max-w-2xl mx-auto space-y-10 pt-6">
        <DocDesc title="1. Hiragana and Katakana">
          <p>
            The cards are divided into two categories: Hiragana and Katakana.
            Hiragana are cards with Japanese syllabaries, while Katakana are
            cards with English letters.
          </p>
          <p>Make sure you are comfortable with one set before switching.</p>
        </DocDesc>
        <DocDesc title="2. Scores to beat">
          <p>
            Each round has a score to beat. The score to beat is the sum of the
            numbers on the cards in the round.
          </p>
          <p>
            For example, if the round is 300, you need to get a hand that sums
            up to 300 or less to clear the round.
          </p>
        </DocDesc>
        <DocDesc title="3. Hands points">
          <p>
            Each hand has a point value and multiplier. The point value is the
            sum of the numbers on the valid cards in the hand.
          </p>
        </DocDesc>
        <DocDesc title="4. Information">
          <p>
            Each round, you will be given 4 discards and 4 turns to beat round
          </p>
          <p>
            You will lose the game if you can&apos;t beat score by turn 4, and
            you have to start over again.
          </p>
          <p>
            There are 8 cards in total. each round, the score will be increased.
            When you beat all 8 rounds, you win the game.
          </p>
          <p>
            Money is given at the end of each round, use it to buy special cards
            in shop.
          </p>
        </DocDesc>
        <DocDesc title="5. Special cards">
          <p>
            Special cards are cards that give you extra points or multipliers.
          </p>
          <p>
            Select carefully as you can only have up to 5 special cards in your
            hand.
          </p>
        </DocDesc>

        <DocDesc title="6. Current cards">
          <p>There are 56 cards in total.</p>

          <p>
            Each round, you will be given 8 cards to choose from. You can select
            up to 5 cards to discard or to play.
          </p>
        </DocDesc>

        <DocDesc title="6. Romaji input">
          <p>
            To select or deselect a card, simply type the romaji of the card.
          </p>

          <p>
            After that, click on right button (2) to play or left button (1) to
            discard.
          </p>
        </DocDesc>
      </div>
    </Doc>
  );
}
