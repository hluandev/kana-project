import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { loader } from "~/routes/_index";

interface Props {
  setWrong: (e: boolean) => void;
}

export const InputAttack = ({ setWrong }: Props) => {
  const [answer, setAnswer] = useState("");
  const data = useLoaderData<typeof loader>();

  const onAttack = (e: any) => {
    e.preventDefault();

    if (answer !== data.word) {
      setWrong(true);
      setAnswer("");
    }
  };

  return (
    <Form
      onSubmit={onAttack}
      method="PUT"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center bg-[#141414] border-neutral-700 p-2 border rounded-full"
    >
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
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
  );
};
