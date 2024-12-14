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
        className="gap-0.5 bg-red-600/30 w-fit backdrop-blur-xl p-0.5 grid rounded-full overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${maxTurnsRef.current}, 1fr)` }}
      >
        {Array.from({ length: maxTurnsRef.current }).map((_, index) => (
          <div
            className={` h-3 rounded-full w-8 ${
              index < turns ? "bg-red-600" : "bg-white/5"
            }`}
            key={index}
          />
        ))}
      </div>
      <div
        className="gap-0.5 bg-blue-600/30 w-fit backdrop-blur-xl px-0.5 pb-0.5 grid rounded-full overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${maxDiscardRef.current}, 1fr)` }}
      >
        {Array.from({ length: maxDiscardRef.current }).map((_, index) => (
          <div
            className={`h-3 w-8 rounded-full ${
              index < discard ? "bg-blue-600" : "bg-white/5"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
