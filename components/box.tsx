interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`rounded-xl border border-black/10 shadow-sm bg-[#fafafa] lg:p-2 p-1 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
