interface Props {
  text: string;
  desc: string;
  className?: string;
}

export const ComboText = ({ text, desc, className }: Props) => {
  return (
    <div className={`${className} gap-2 items-center  flex flex-col`}>
      <p className="font-bold text-8xl animate-bounce w-fit leading-none relative">
        {text}
        <span className="absolute animate-ping top-0 left-0 leading-none">
          {text}
        </span>
      </p>

      <p className="text-3xl font-bold inline-block">{desc}</p>
    </div>
  );
};
