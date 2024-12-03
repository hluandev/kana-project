interface InfoBoxProps {
  children: React.ReactNode;
  title: string;
}

export const InfoBox = ({ children, title }: InfoBoxProps) => {
  return (
    <div className="rounded-md bg-white h-36 p-3 flex flex-col justify-between overflow-hidden">
      <div className="text-neutral-400 text-[0.9rem]">{title}</div>
      <p className="font-medium text-lg">{children}</p>
    </div>
  );
};
