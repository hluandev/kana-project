export const Win = () => {
  return (
    <div className="fixed bg-black/50 w-full flex-col gap-8 h-full flex justify-center items-center z-10">
      <div className="text-yellow-600 text-8xl">You Defeated</div>
      <div className="bg-yellow-600 px-4 py-2 font-bold rounded-md">
        Next match
      </div>
    </div>
  );
};
