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
    <div className="bg-white p-4 rounded-md h-[20rem] w-[16rem] flex flex-col justify-between">
      <p className="text-[0.9rem]">Stage {stage}</p>
      <div className="space-y-2">
        <div className="space-y-2">
          <p className="text-xl font-medium leading-none">{title}</p>
          <p className="text-black/60 text-[0.9rem]">{description}</p>
        </div>
        <Link
          prefetch={true}
          href={href}
          className={`${
            disabled ? "bg-black/10" : "mainBgColor"
          } block text-center font-medium w-full rounded-md  p-2`}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};
