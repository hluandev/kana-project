import { Form } from "@remix-run/react";
import { StatusBar } from "./StatusBar";
import { Monster } from "./Monster";
import { InputAttack } from "./InputAttack";
import { useState } from "react";

export const Main = () => {
  const [wrong, setWrong] = useState(false);

  return (
    <div className=" col-span-8 py-3 h-full">
      <div className="relative h-full  rounded-2xl border-white bg-[#161716] shadow-inner-shadow-dark-float">
        <div className="border-b border-neutral-800 p-5 text-2xl font-black">
          Battle
        </div>

        <StatusBar />

        <Monster wrong={wrong} />

        <InputAttack setWrong={setWrong} />
      </div>
    </div>
  );
};
