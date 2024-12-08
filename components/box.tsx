interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`rounded-xl border border-black/10 shadow-sm bg-[#fafafa] p-2 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
