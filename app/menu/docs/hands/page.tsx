import { Doc } from "@/components/docs/doc";
import ExampleCard from "@/components/docs/example-card";

export default function Hands() {
  return (
    <Doc mxAuto title="3. Hands">
      <p>
        Hands are the cards you play in each round. You can select up to 5 cards
        to play.
      </p>

      <div className="space-y-2 flex flex-col items-center">
        <div className="flex flex-col justify-between items-center w-40 h-56 p-2 bg-white rounded-lg">
          <div className="flex justify-between w-full text-lg">
            <p className="text-2xl pl-1">1</p>
            <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
              あ
            </p>
          </div>

          <div className="text-5xl font-medium">か</div>

          <p>ka</p>
        </div>

        <p className="italic text-black/50">Example of a card</p>
      </div>

      <p>
        The number in the top corner indicates the card's rank, which ranges
        from 1 to 13.
      </p>
      <div className="space-y-2">
        <p>
          Different than Balatro and Poker, in Kamikana, there will be 5 suits:
        </p>
        <div className="flex gap-2 justify-center">
          <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
            あ
          </p>
          <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
            う
          </p>
          <p className="bg-[#e4e4e6] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
            お
          </p>
          <p className="bg-[#ffe65e] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
            い
          </p>
          <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
            え
          </p>
        </div>
      </div>

      <p>
        In order to clear the round, you need to make the best hands to clear
        the rounds. There are 9 hands combination, and only the card satisfies
        the hand combination will be counted, others will be discarded.
      </p>

      <div className=" bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col ">
          <div>
            <p className="font-medium text-lg">Straight Flush</p>
            <p>5 cards in sequence with the same suit</p>
          </div>
          <div className="flex gap-2 bg-white/50 p-2 rounded-lg w-fit">
            <div className="flex items-center gap-1.5">
              1
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              4
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">100</span> /{" "}
          <span className="text-purple-600">8</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Four of a Kind</p>
            <p>4 cards of the same rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  え
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">60</span> /{" "}
          <span className="text-purple-600">5</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Full House</p>
            <p>3 cards of the same rank and 2 cards of another rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
            </div>
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  え
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">40</span> /{" "}
          <span className="text-purple-600">4</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Flush</p>
            <p>5 cards of the same suit</p>
          </div>
          <div className="flex gap-2 bg-white/50 p-2 rounded-lg w-fit">
            <div className="flex items-center gap-1.5">
              1
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              6
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              8
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">40</span> /{" "}
          <span className="text-purple-600">3</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Straight</p>
            <p>5 cards in sequence</p>
          </div>
          <div className="flex gap-2 bg-white/50 p-2 rounded-lg w-fit">
            <div className="flex items-center gap-1.5">
              1
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              4
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">30</span> /{" "}
          <span className="text-purple-600">3</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Three of a Kind</p>
            <p>3 cards of the same rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">20</span> /{" "}
          <span className="text-purple-600">3</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Two Pair</p>
            <p>2 cards of the same rank and 2 cards of another rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
            </div>
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  え
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              6
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className="text-2xl font-medium">
          <span className="text-blue-500">20</span> /{" "}
          <span className="text-purple-600">2</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">Pair</p>
            <p>2 cards of the same rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl font-medium">
          <span className="text-blue-500">10</span> /{" "}
          <span className="text-purple-600">2</span>
        </div>
      </div>

      <div className="space-y-2 bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-2 flex flex-col">
          <div>
            <p className="font-medium text-lg">High Card</p>
            <p>No hand combination</p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              7
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              8
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              10
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex gap-2 bg-white/50 p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                13
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-2xl font-medium">
          <span className="text-blue-500">5</span> /{" "}
          <span className="text-purple-600">1</span>
        </div>
      </div>
    </Doc>
  );
}
