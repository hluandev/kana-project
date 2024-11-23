interface SpecialCardProps {
  japanese: string;
}

export default function SpecialCard({ japanese }: SpecialCardProps) {
  return (
    <div className="flex hover:bg-neutral-950 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700 hover:z-50 duration-300 flex-col h-full w-full bg-neutral-900 border border-neutral-800 rounded-lg">
      <p className="flex-1 border-b border-neutral-800 p-4">{japanese}</p>

      <p className="text-center py-10">{"Gain 4 multiplier"}</p>
    </div>
  );
}
