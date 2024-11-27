interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={` rounded-2xl bg-white overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
