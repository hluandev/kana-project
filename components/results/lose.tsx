import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const Lose = () => {
  const {
    setTurns,
    setScore,
    setMultiplier,
    setProgress,
    setMissionID,
    setDiscard,
    setYen,
    setAnnouncement,
  } = useScoreStore();

  const { setSelectedCard, drawHand, drawSpecial, setCurrentSpecial } =
    useKanaStore();

  const handleLoseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTurns(4);
    setScore(0);
    setMultiplier(0);
    setProgress(0);
    setAnnouncement("");
    setMissionID(1);
    setDiscard(4);
    setYen(0);
    drawHand();
    drawSpecial();
    setSelectedCard([]);
    setCurrentSpecial([]);
  };

  return (
    <div className="fixed bg-black/50 w-full flex-col gap-8 h-full flex justify-center items-center z-10">
      <div className="text-red-600 text-8xl">You Died</div>
      <form onSubmit={handleLoseSubmit} action="">
        <input
          type="submit"
          value={"Try again"}
          className="bg-red-600 px-4 py-2 font-bold rounded-md"
        />
      </form>
    </div>
  );
};
