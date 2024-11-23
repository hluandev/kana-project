interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={` rounded-lg shadow-md border border-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
};
