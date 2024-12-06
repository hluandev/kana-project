interface InfoBoxProps {
  children: React.ReactNode;
  title: string;
}

export const InfoBox = ({ children, title }: InfoBoxProps) => {
  return (
    <div className="rounded-xl bg-white p-3 h-32 flex flex-col justify-between leading-none border border-black/15 shadow-sm  overflow-hidden">
      <div className="text-black/50 text-sm">{title}</div>
      <p className="font-medium">{children}</p>
    </div>
  );
};
