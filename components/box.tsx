interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`rounded-md bg-white overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
