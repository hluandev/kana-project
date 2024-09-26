import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

export const Monster = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
      <div className="space-y-5 bg-[#141414] p-6 rounded-xl border border-neutral-700">
        <div className="">
          <img
            src={`/img/${data.meaning}.jpg`}
            className="rounded-xl w-96"
            alt=""
          />
        </div>
        <p className="text-7xl pb-2 font-medium text-center">{data.word}</p>
      </div>
    </div>
  );
};
