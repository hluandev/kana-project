interface InfoBoxProps {
  children: React.ReactNode;
  title: string;
}

export const InfoBox = ({ children, title }: InfoBoxProps) => {
  return (
    <div className="rounded-xl bg-white lg:p-3 px-1.5 py-1 lg:h-24 max-lg:gap-1 flex flex-col justify-between leading-none border border-black/10 shadow-sm  overflow-hidden">
      <div className="text-black/50">{title}</div>
      <p className="font-medium">{children}</p>
    </div>
  );
};
