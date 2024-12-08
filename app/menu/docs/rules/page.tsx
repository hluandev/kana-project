import { Doc } from "@/components/docs/doc";
import DocDesc from "@/components/docs/doc-desc";

export default function Rules() {
  return (
    <Doc title="2. Rules">
      <div className="max-w-md mx-auto space-y-8">
        <DocDesc title="Hiragana and Katakana">
          <p>
            The cards are divided into two categories: Hiragana and Katakana.
          </p>
          <p>
            - <span className="font-semibold">Hiragana</span> is used for native
            Japanese words and grammar.
          </p>
          <p>
            - <span className="font-semibold">Katakana</span> is used for
            foreign words and names.
          </p>
          <p>Make sure you are comfortable with one set before switching.</p>
        </DocDesc>
        <DocDesc title="Round score">
          <p>
            For each round, you&apos;ll have a target score to beat. Beat all 8
            rounds to win the game!
          </p>
          <p>In endless mode, every round you win will count as a win.</p>
        </DocDesc>
        <DocDesc title="Hand's score">
          <p>
            Your current hand&apos;s score will be shown here. Blue represents
            points, and red indicates the multiplier.
          </p>
        </DocDesc>
        <DocDesc title="Information">
          <p>
            - In each round, you&apos;ll get{" "}
            <span className="font-semibold">4 discards</span> and{" "}
            <span className="font-semibold">4 turns</span> to beat the target
            score.
          </p>
          <p>
            - If you can&apos;t beat the target score by turn 4, you&apos;ll
            lose the game and have to start over.
          </p>
          <p>
            - There are 8 rounds in total, and the target score increases each
            round. Beat all 8 rounds to win the game!
          </p>
          <p>
            - At the end of each round, you&apos;ll earn money. Use it to buy
            special cards in the shop.
          </p>
        </DocDesc>
        <DocDesc title="Levels">
          <p>Everytime you win a round, you gain 20xp.</p>
        </DocDesc>
        <DocDesc title="Special cards">
          <p>
            Special cards provide extra points or multipliers. Choose wisely, as
            you can only hold up to 5 special cards in your hand.
          </p>
        </DocDesc>

        <DocDesc title="Upgrade cards">
          <p>
            You can use upgrade cards to make your hands stronger. There&apos;s
            no limit, so upgrade as much as you like!
          </p>
        </DocDesc>

        <DocDesc title="Current cards">
          <p>
            There are 56 cards in total. Each round, you&apos;ll be given 8
            cards to choose from. You can select up to 5 cards to either discard
            or play.
          </p>
        </DocDesc>

        <DocDesc title="Romaji input">
          <p>
            To select or deselect a card, simply type the romaji of the card.
            Then, click the right button (2) to play the card or the left button
            (1) to discard it.
          </p>
        </DocDesc>
      </div>
    </Doc>
  );
}
