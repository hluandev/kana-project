import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";
import SpecialCard from "./special-card";

export const Win = () => {
  const {
    missionID,
    setMissionID,
    setScore,
    setMultiplier,
    setTurns,
    setDiscard,
  } = useScoreStore();

  const { drawHand, setSelectedCard } = useKanaStore();
  return (
    <div className="fixed bg-black/40 backdrop-blur-lg w-full flex-col gap-8 h-full flex justify-center items-center z-10">
      <div className="text-yellow-600 text-8xl">You Defeated</div>

      <div className="h-96 grid grid-cols-2 gap-6 w-1/3 p-6 bg-[#1e2022] border border-[#2e3032] rounded-lg">
        {[1, 2].map((item) => (
          <SpecialCard key={item} japanese={item.toString()} />
        ))}
      </div>

      <div
        onClick={() => {
          setMissionID(missionID + 1);
          setScore(0);
          setTurns(4);
          setDiscard(4);
          setMultiplier(0);
          drawHand();
          setSelectedCard([]);
        }}
        className="bg-yellow-600 px-4 py-2 font-bold rounded-md"
      >
        Next match
      </div>
    </div>
  );
};
