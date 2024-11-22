interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`bg-[#282b2f] rounded-lg shadow-md border border-[#36383b] ${className}`}
    >
      {children}
    </div>
  );
};
