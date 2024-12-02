interface ExampleCardProps {
  rank: number;
  suit: string;
  romaji: string;
  japanese: string;
  bgColor: string;
}

export default function ExampleCard({
  rank,
  suit,
  romaji,
  japanese,
  bgColor,
}: ExampleCardProps) {
  return (
    <div className="flex flex-col justify-between items-center w-36 h-48 p-2 bg-white rounded-lg">
      <div className="flex justify-between w-full text-lg">
        <p className="text-2xl pl-1">{rank}</p>
        <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
          {suit}
        </p>
      </div>

      <div className="text-5xl font-medium">{japanese}</div>

      <p>{romaji}</p>
    </div>
  );
}
