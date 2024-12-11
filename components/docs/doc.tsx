interface DocProps {
  title: string;
  children: React.ReactNode;
  mxAuto?: boolean;
}

export const Doc = ({ title, children, mxAuto = false }: DocProps) => {
  return (
    <div className={`space-y-4 ${mxAuto && "mx-auto max-w-md"}`}>
      <h2 className="pl-0.5 font-medium mx-auto  max-w-md">{title}</h2>
      <div className="space-y-4 ">{children}</div>
    </div>
  );
};
