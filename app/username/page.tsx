"use client";

import {
  checkUsername,
  updateUsername,
} from "@/actions/server/use-server/update-username";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function UsernamePage() {
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsChecking(true);
    setErrorMsg("");

    const usernameAvailable = await checkUsername(username);

    if (usernameAvailable === true) {
      setErrorMsg("This username is already taken");
      setIsChecking(false);
      return;
    } else {
      await updateUsername(username);
      setIsChecking(false);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center h-full flex-col">
      <div className="bg-black/5 flex flex-col gap-3 w-80 border border-black/15 shadow-inner p-5 rounded-xl">
        <div>
          <p className="font-medium">What do you like to be called?</p>
          <p className="text-sm text-black/50">
            This name will be seen on leaderboard.
          </p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border text-center w-full border-black/15 shadow-sm rounded-lg p-1.5"
            type="text"
            placeholder="Username"
            name="username"
          />
          <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          <button
            className="mainBgColor flex justify-center items-center py-1.5 w-full rounded-lg border border-black/15 shadow-sm disabled:opacity-50"
            type="submit"
          >
            {isChecking ? <Loader2 className="animate-spin" /> : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
