interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`rounded-xl bg-black/70 backdrop-blur-xl lg:p-2 p-1 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
