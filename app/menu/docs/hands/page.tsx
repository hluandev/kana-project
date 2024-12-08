import { ComboHelp } from "@/components/board/combo-help";
import { Doc } from "@/components/docs/doc";

export default function Hands() {
  return (
    <Doc mxAuto title="3. Hands">
      <p>
        Hands are the cards you play in each round. You can select up to 5 cards
        to play.
      </p>

      <div className="space-y-2 flex flex-col items-center">
        <div className="flex flex-col justify-between items-center w-40 h-56 p-2 bg-white border border-black/10 shadow-sm rounded-lg">
          <div className="flex justify-between w-full text-lg">
            <p className="text-2xl pl-1">1</p>
            <p className="bg-[#ff915a] border border-black/10 shadow-sm h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
              あ
            </p>
          </div>

          <div className="text-5xl font-medium">か</div>

          <p>ka</p>
        </div>

        <p className="italic text-black/50">Example of a card</p>
      </div>

      <p>
        The number in the top corner indicates the card&apos;s rank, which
        ranges from 1 to 13.
      </p>
      <div className="space-y-2">
        <p>
          Different than Balatro and Poker, in Kamikana, there will be 5 suits:
        </p>
        <div className="flex gap-2 justify-center">
          <p className="bg-[#ff915a] h-8 w-8 border border-black/10 shadow-sm flex justify-center items-center  rounded-lg aspect-square">
            あ
          </p>
          <p className="bg-[#01de5b] h-8 w-8 border border-black/10 shadow-sm flex justify-center items-center  rounded-lg aspect-square">
            う
          </p>
          <p className="bg-[#e4e4e6] h-8 w-8 border border-black/10 shadow-sm flex justify-center items-center  rounded-lg aspect-square">
            お
          </p>
          <p className="bg-[#ffe65e] h-8 w-8 border border-black/10 shadow-sm flex justify-center items-center  rounded-lg aspect-square">
            い
          </p>
          <p className="bg-[#fc96df] h-8 w-8 border border-black/10 shadow-sm flex justify-center items-center  rounded-lg aspect-square">
            え
          </p>
        </div>
      </div>

      <p>
        In order to clear the round, you need to make the best hands to clear
        the rounds. There are 9 hands combination, and only the card satisfies
        the hand combination will be counted, others will be discarded.
      </p>

      <ComboHelp />
    </Doc>
  );
}
