import { useScoreStore } from "@/stores/useScoreStore";

export const BossHp = () => {
  const bossHp = useScoreStore((state) => state.bossHp);
  return (
    <div className="bg-black/50 backdrop-blur-xl rounded-full  p-1 text-center">
      <div className="bg-red-600 rounded-full p-1.5 font-medium text-base h-full w-full">
        {bossHp}
      </div>
    </div>
  );
};
