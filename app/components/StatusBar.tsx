import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

export const StatusBar = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-5 flex justify-between">
      {/* Player */}
      <div className="flex gap-2">
        <div>
          <img src="/img/avatar.png" className="h-20 rounded-md" alt="" />
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-3xl font-black leading-none">Ruan</p>
          <div className="italic  bg-lime-400  w-72 py-1 text-center rounded-md text-black text-3xl font-black">
            100
          </div>
        </div>
      </div>

      {/* Monster */}
      <div className="flex gap-2">
        <div className="flex flex-col justify-between">
          <p className="text-3xl font-black text-right leading-none">
            {data.word}
          </p>
          <div className="italic bg-red-500  w-72 py-1 text-center rounded-md text-black text-3xl font-black">
            20
          </div>
        </div>

        <div>
          <img src="/img/avatar.png" className="h-20 rounded-md" alt="" />
        </div>
      </div>
    </div>
  );
};
