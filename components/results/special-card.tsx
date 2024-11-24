interface SpecialCardProps {
  japanese: string;
}

export default function SpecialCard({ japanese }: SpecialCardProps) {
  return (
    <div className="flex hover:bg-neutral-950 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-700 hover:z-50 duration-300 flex-col h-full w-full bg-[url('/img/ya.png')] bg-cover border border-neutral-800 rounded-lg">
      <p className="flex-1 bg-[url('/img/ya.png')] bg-cover border-b border-neutral-800 p-4">
        {japanese}
      </p>

      <p className="text-center relative bg-black/50 backdrop-blur-xl py-10">
        <p className="absolute -top-6 leading-none flex justify-center items-center text-xl bg-black h-12 w-12 border border-neutral-800 rounded-full left-1/2 -translate-x-1/2">
          {japanese}
        </p>
        {"Gain 4 multiplier"}
      </p>
    </div>
  );
}
