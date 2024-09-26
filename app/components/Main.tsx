import { Form } from "@remix-run/react";
import { StatusBar } from "./StatusBar";

export const Main = () => {
  return (
    <div className=" col-span-8 py-3 h-full">
      <div className="relative h-full  rounded-2xl border-white bg-[#161716] shadow-inner-shadow-dark-float">
        <div className="border-b border-neutral-800 p-5 text-2xl font-black">
          Battle
        </div>

        <StatusBar />

        <Form className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center bg-[#141414] border-neutral-700 p-2 border rounded-full">
          <input
            type="text"
            placeholder="Type here..."
            className="p-2 bg-transparent placeholder:text-neutral-600 text-center w-96 outline-none text-xl font-semibold"
          />
          <button
            type="submit"
            className="font-black text-2xl bg-lime-500 py-2 px-5 text-black rounded-full"
          >
            Attack
          </button>
        </Form>
      </div>
    </div>
  );
};
