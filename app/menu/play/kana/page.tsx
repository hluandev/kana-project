import { LockIcon } from "lucide-react";
import Link from "next/link";

const Kana = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-1/2 w-full -translate-x-1/2 z-10 flex justify-center items-center px-12">
      <div className="grid grid-cols-4 gap-1 font-mono ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
          <Link
            href={`kana/${item.toString()}`}
            className={`${
              item === 5 || item === 10 ? "bg-red-800/80" : "bg-neutral-800/80"
            } hover:bg-orange-600 relative cursor-pointer text-3xl rounded-md overflow-hidden backdrop-blur-xl font-bold w-60 flex justify-center items-center aspect-video`}
            key={index}
          >
            {item === 1 && (
              <div className="text-xs absolute top-2 right-2 bg-orange-500/80 px-1.5 rounded-md">
                Current
              </div>
            )}
            <p>{item === 1 ? "あ" : <LockIcon strokeWidth={1.5} />}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Kana;
