interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`bg-[#0e0e11] rounded-lg shadow-md border border-[#262630] ${className}`}
    >
      {children}
    </div>
  );
};
