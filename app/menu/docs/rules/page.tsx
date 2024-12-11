import { Doc } from "@/components/docs/doc";
import DocDesc from "@/components/docs/doc-desc";

export default function Rules() {
  return (
    <Doc title="2. Rules">
      <div className="max-w-md mx-auto space-y-8">
        <DocDesc title="Hiragana and Katakana">
          <div className="bg-[#fafafa] w-1/2 border   shadow-inner flex-1  rounded-xl p-1 grid grid-cols-2 gap-2">
            <button
              className={`rounded-lg  py-2 bg-white border  
        }`}
            >
              Hiragana
            </button>
            <button
              className={`rounded-lg py-2 
        }`}
            >
              Katakana
            </button>
          </div>

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
          <div
            className={`rounded-xl w-1/2 border   bg-[#fafafa] p-2 overflow-hidden `}
          >
            <div className="text-black/50  flex justify-center items-center pb-4 ">
              Score at least 300 points to clear this round.
            </div>

            <div className="rounded-lg font-medium overflow-hidden">
              <div className="relative h-8">
                <div
                  className={`absolute top-0 w-full rounded-xl right-0 h-full bg-white  border `}
                />
                <div className="absolute leading-none  w-full h-full flex gap-1 items-center justify-center text-center z-10">
                  <p>0</p> <p className="">/</p> <p>300</p>
                </div>
              </div>
            </div>
          </div>

          <p>
            For each round, you&apos;ll have a target score to beat. Beat all 8
            rounds to win the game!
          </p>
          <p>In endless mode, every round you win will count as a win.</p>
        </DocDesc>
        <DocDesc title="Hand's score">
          <div
            className={`rounded-xl w-1/2 border   bg-[#fafafa] p-2 overflow-hidden `}
          >
            <div className="flex flex-col gap-1">
              <div className="">Hand</div>

              <div className="text-xl font-semibold">0</div>
            </div>

            <div className="font-medium text-center grid mt-2 gap-2 grid-cols-2">
              <div className="py-1.5 bg-white  border  rounded-lg text-blue-600">
                0
              </div>
              <div className="py-1.5 bg-white  border  rounded-lg text-red-500">
                0
              </div>
            </div>
          </div>
          <p>
            Your current hand&apos;s score will be shown here. Blue represents
            points, and red indicates the multiplier.
          </p>
        </DocDesc>
        <DocDesc title="Information">
          <div
            className={`rounded-xl grid grid-cols-2 w-1/2 grid-rows-2 p-2 bg-[#fafafa] border   gap-2`}
          >
            <div className="rounded-xl bg-white p-3 h-24 flex flex-col justify-between leading-none border    overflow-hidden">
              <div className="text-black/50 ">Turns</div>
              <p className="font-medium">4</p>
            </div>
            <div className="rounded-xl bg-white p-3 h-24 flex flex-col justify-between leading-none border    overflow-hidden">
              <div className="text-black/50 ">Discards</div>
              <p className="font-medium">4</p>
            </div>
            <div className="rounded-xl bg-white p-3 h-24 flex flex-col justify-between leading-none border    overflow-hidden">
              <div className="text-black/50 ">Round</div>
              <p className="font-medium">4</p>
            </div>
            <div className="rounded-xl bg-white p-3 h-24 flex flex-col justify-between leading-none border    overflow-hidden">
              <div className="text-black/50 ">Money</div>
              <p className="font-medium">4</p>
            </div>
          </div>

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
          <div
            className={`${"[background:linear-gradient(45deg,#fff,theme(colors.white)_50%,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.red.600/.48)_0%,theme(colors.red.500)_20%,theme(colors.indigo.300)_40%,theme(colors.indigo.500)_60%,theme(colors.slate.600/.48)_100%)_border-box] rounded-xl border-2 border-transparent animate-border"} relative bg-white border-2 bg-black/5 w-36  xl:p-2 p-1 rounded-lg`}
          >
            <div>
              <div className="flex justify-between items-center">
                <p>
                  <span className="text-blue-600">+20</span> /{" "}
                  <span className="text-red-500">+3</span>{" "}
                </p>
              </div>
              <p className=" text-black/50">Three Of A Kind</p>
            </div>
          </div>

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
