interface InfoBoxProps {
  children: React.ReactNode;
  title: string;
}

export const InfoBox = ({ children, title }: InfoBoxProps) => {
  return (
    <div className="rounded-2xl bg-white h-36 p-4 flex flex-col justify-between overflow-hidden">
      <div className="text-neutral-400 font-medium">{title}</div>
      <p className="text-2xl font-semibold">{children}</p>
    </div>
  );
};
