import Link from "next/link";

interface PlayBoxProps {
  stage: number;
  title: string;
  description: string;
  linkText: string;
  href: string;
  disabled?: boolean;
}

export const PlayBox = ({
  stage,
  title,
  description,
  linkText,
  href,
  disabled,
}: PlayBoxProps) => {
  return (
    <div
      className={` ${
        disabled ? "bg-neutral-400" : "bg-[#50d0d2]"
      }  bg-opacity-30 border border-black/15 shadow-sm p-4 rounded-xl h-[20rem] w-[16rem] flex flex-col justify-between`}
    >
      <p className="text-[0.9rem] bg-white/40 w-fit rounded-lg py-1 px-3">
        Stage {stage}
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xl font-medium leading-none">{title}</p>
          <p className="text-black/60 text-sm">{description}</p>
        </div>
        <Link
          prefetch={true}
          href={href}
          className={`${
            disabled ? "bg-black/10" : "mainBgColor"
          } block border border-black/15 shadow-sm text-center font-medium w-full rounded-md  p-2`}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};
