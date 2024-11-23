export const Lose = () => {
  return (
    <div className="fixed bg-black/50 w-full flex-col gap-8 h-full flex justify-center items-center z-10">
      <div className="text-red-600 text-8xl">You Died</div>
      <div className="bg-red-600 px-4 py-2 font-bold rounded-md">Try again</div>
    </div>
  );
};
