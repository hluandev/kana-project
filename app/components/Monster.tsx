import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

interface Props {
  wrong: boolean;
}

export const Monster = ({ wrong }: Props) => {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
      <div className="space-y-5 bg-[#141414] p-6 rounded-xl border border-neutral-700">
        <div className="relative">
          <img
            src={`/img/${data.meaning}.jpg`}
            className="rounded-xl w-96"
            alt=""
          />

          {wrong && (
            <div className="absolute flex flex-col gap-1 items-center text-5xl font-black bg-red-500/35 backdrop-blur-lg p-4 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p>{data.read}</p>
              <p>{data.meaning}</p>
            </div>
          )}
        </div>
        <p className="text-7xl pb-2 font-medium text-center">{data.word}</p>
      </div>
    </div>
  );
};
