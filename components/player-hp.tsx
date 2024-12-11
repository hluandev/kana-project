import { useScoreStore } from "@/stores/useScoreStore";

export const PlayerHp = () => {
  const { turns } = useScoreStore();
  // maxTurns will be either the current turns or 4, whichever is higher
  const maxTurns = Math.max(turns, 4);

  return (
    <div
      className="gap-1 bg-black/80 w-2/3 backdrop-blur-xl p-1 grid"
      style={{ gridTemplateColumns: `repeat(${maxTurns}, 1fr)` }}
    >
      {Array.from({ length: maxTurns }).map((_, index) => (
        <div
          className={`w-full h-5 ${
            index < turns ? "bg-red-600" : "bg-gray-800"
          }`}
          key={index}
        />
      ))}
    </div>
  );
};
