interface InfoBoxProps {
  children: React.ReactNode;
  title: string;
}

export const InfoBox = ({ children, title }: InfoBoxProps) => {
  return (
    <div className="rounded-xl bg-white  p-3 flex items-center leading-none border border-black/15 shadow-sm justify-between overflow-hidden">
      <div className="text-black/50 font-medium text-sm">{title}</div>
      <p className="font-medium">{children}</p>
    </div>
  );
};
