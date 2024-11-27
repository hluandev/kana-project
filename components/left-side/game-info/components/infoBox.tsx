interface InfoBoxProps {
  children: React.ReactNode;
}

export const InfoBox = ({ children }: InfoBoxProps) => {
  return (
    <div className="rounded-lg bg-[#f2f3f7] py-4 text-center overflow-hidden">
      {children}
    </div>
  );
};
