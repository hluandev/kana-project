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
    <div className="bg-white p-4 h-[25rem] w-[20rem] rounded-2xl flex flex-col justify-between">
      <p className="text-2xl">Stage {stage}</p>
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-4xl font-semibold leading-none">{title}</p>
          <p className="text-black/60">{description}</p>
        </div>
        <Link
          prefetch={true}
          href={href}
          className={`${
            disabled ? "bg-black/10" : "bg-[#efcb68]"
          } block text-center  font-semibold w-full text-2xl p-3 rounded-xl`}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};
