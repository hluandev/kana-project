interface DocProps {
  title: string;
  children: React.ReactNode;
  mxAuto?: boolean;
}

export const Doc = ({ title, children, mxAuto = false }: DocProps) => {
  return (
    <div className={`space-y-6 ${mxAuto && "mx-auto max-w-2xl"}`}>
      <h2 className="text-lg pl-0.5">{title}</h2>
      {children}
    </div>
  );
};
