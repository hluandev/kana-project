import { useScoreStore } from "@/stores/useScoreStore";

export const PlayerHp = () => {
  const { turns, discard } = useScoreStore();
  // maxTurns will be either the current turns or 4, whichever is higher
  const maxTurns = Math.max(turns, 4);
  const maxDiscard = Math.max(discard, 4);

  return (
    <div className="flex flex-col">
      <div
        className="gap-0.5 bg-black/80 w-44 backdrop-blur-xl p-0.5 grid"
        style={{ gridTemplateColumns: `repeat(${maxTurns}, 1fr)` }}
      >
        {Array.from({ length: maxTurns }).map((_, index) => (
          <div
            className={`w-full h-3 ${
              index < turns ? "bg-red-600" : "bg-white/10"
            }`}
            key={index}
          />
        ))}
      </div>
      <div
        className="gap-0.5 bg-black/80 w-44 backdrop-blur-xl px-0.5 pb-0.5 grid"
        style={{ gridTemplateColumns: `repeat(${maxDiscard}, 1fr)` }}
      >
        {Array.from({ length: maxDiscard }).map((_, index) => (
          <div
            className={`w-full h-3 ${
              index < discard ? "bg-blue-600" : "bg-white/10"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
