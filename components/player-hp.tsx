import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect, useRef } from "react";

export const PlayerHp = () => {
  const { turns, discard } = useScoreStore();
  const maxTurnsRef = useRef(4);
  const maxDiscardRef = useRef(4);

  useEffect(() => {
    maxTurnsRef.current = Math.max(maxTurnsRef.current, turns);
  }, [turns]);

  useEffect(() => {
    maxDiscardRef.current = Math.max(maxDiscardRef.current, discard);
  }, [discard]);

  return (
    <div className="flex flex-col">
      <div
        className="gap-0.5 bg-black/80 w-44 backdrop-blur-xl p-0.5 grid"
        style={{ gridTemplateColumns: `repeat(${maxTurnsRef.current}, 1fr)` }}
      >
        {Array.from({ length: maxTurnsRef.current }).map((_, index) => (
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
        style={{ gridTemplateColumns: `repeat(${maxDiscardRef.current}, 1fr)` }}
      >
        {Array.from({ length: maxDiscardRef.current }).map((_, index) => (
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
