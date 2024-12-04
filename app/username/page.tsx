export default function UsernamePage() {
  return (
    <div className="flex justify-center  items-center h-full flex-col">
      <div className="bg-black/5 flex flex-col gap-3 w-80  border border-black/15 shadow-inner p-5 rounded-xl">
        <div>
          <p className="font-medium">What do you like to be called?</p>
          <p className="text-sm text-black/50">
            This name will be seen on leaderboard.
          </p>
        </div>
        <form className="flex text-sm gap-1">
          <input
            className="bg-white border text-center w-full border-black/15 shadow-sm rounded-lg p-1.5"
            type="text"
            placeholder="Username"
            name="username"
          />
          <button
            className=" mainBgColor py-1 w-28 rounded-lg border border-black/15 shadow-sm"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
