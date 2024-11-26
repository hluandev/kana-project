interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`border border-neutral-300 rounded-[14px] bg-white   ${className}`}
    >
      {children}
    </div>
  );
};
