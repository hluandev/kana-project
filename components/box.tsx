interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`rounded-xl border   bg-[#fafafa] lg:p-2 p-1 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
