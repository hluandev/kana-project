"use client";

import { attack } from "@/actions/attack";
import { failStore } from "@/store/failStore";
import { useRef, useState } from "react";

interface Props {
  monsters: any;
  pro: any;
}

export const InputAttack = ({ monsters, pro }: Props) => {
  const killRef = useRef(null);
  const failRef = useRef(null);
  const { setFail } = failStore();
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setAnswer("");

    if (answer === monsters.read) {
      if (killRef.current) {
        await attack(monsters.id, pro);
        killRef.current.play();
        setFail(false);
      }
    } else {
      if (failRef.current) {
        failRef.current.play();
        setFail(true);
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
          id="answer"
          name="answer"
          required
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type here"
          className="bg-[#f6f6f6] w-96 text-center  shadow-inner outline-none rounded-lg border border-neutral-300 py-3 px-4"
        />
        <input
          type="submit"
          className="bg-blue-500 text-white font-semibold p-3 w-24 rounded-md"
        />
        {/* <button
          formAction={attack}
          className="bg-blue-500 text-white font-semibold p-3 w-24 rounded-md"
        >
          Attack
        </button> */}
      </form>

      <audio ref={killRef} src="/audio/kill.mp3" preload="auto" />
      <audio ref={failRef} src="/audio/fail.mp3" preload="auto" />
    </div>
  );
};
