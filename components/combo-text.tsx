interface Props {
  text: string;
  desc: string;
  className?: string;
}

export const ComboText = ({ text, desc, className }: Props) => {
  return (
    <div className={`${className} text-center space-y-2`}>
      <p className="font-bold leading-none relative">
        {text}
        <span className="absolute top-0 left-0 leading-none">{text}</span>
      </p>

      <p className="text-4xl font-bold">{desc}</p>
    </div>
  );
};
