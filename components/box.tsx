interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`rounded-xl border border-black/15 shadow-sm bg-white p-6 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
