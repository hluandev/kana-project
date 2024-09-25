"use client";

import { useRef, useState } from "react";

interface Props {
  read: string;
}

export const InputAttack = ({ read }: Props) => {
  const killRef = useRef(null);
  const failRef = useRef(null);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setAnswer("");

    if (answer === read) {
      if (killRef.current) {
        killRef.current.play();
      }
    } else {
      if (failRef.current) {
        failRef.current.play();
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" left-1/2 -translate-x-1/2 absolute  bottom-20 space-x-2"
      >
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type here"
          className="bg-[#f6f6f6] w-96 text-center  shadow-inner outline-none rounded-lg border border-neutral-300 py-3 px-4"
        />
        <input
          value={"Attack"}
          type="submit"
          className="bg-blue-500 text-white font-semibold p-3 w-24 rounded-md"
        />
      </form>

      <audio ref={killRef} src="/audio/kill.mp3" preload="auto" />
      <audio ref={failRef} src="/audio/fail.mp3" preload="auto" />
    </div>
  );
};
