import { useKanaStore } from "@/stores/useKanaStore";
import { useState } from "react";

interface SpecialCardProps {
  japanese: string;
  desc: string;
  romaji: string;
  price: number;
}

export default function SpecialCard({
  japanese,
  desc,
  romaji,
  price,
}: SpecialCardProps) {
  const { selectedSpecial } = useKanaStore();
  const [hover, setHover] = useState(false);

  const isSelected = selectedSpecial.some((card) => card.romaji === romaji);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex relative  p-3 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500 hover:z-40 duration-300 flex-col h-full w-full border border-black/10 shadow-sm ${
        isSelected
          ? "border-yellow-500 shadow-lg shadow-yellow-500/50"
          : "bg-[#fbfaf9]"
      } rounded-lg`}
    >
      <div className="flex-1 relative bg-cover  border-neutral-800 p-4">
        <p className="absolute bg-[#efcb68] left-2 top-2 rounded-md z-50 justify-center items-center h-8 w-12 flex ">
          ¥{price}
        </p>
      </div>

      <p className="text-center flex items-center  justify-center relative bg-[#fefefe] shadow-sm rounded-lg border border-black/10  h-32">
        <p className="absolute text-white -top-5 leading-none flex justify-center items-center text-xl bg-black h-10 w-16 border border-neutral-800 rounded-md left-1/2 -translate-x-1/2">
          {hover ? romaji : japanese}
        </p>
        <p className="px-6">{desc}</p>
      </p>
    </div>
  );
}
