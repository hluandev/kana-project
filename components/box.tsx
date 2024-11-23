interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={` darkBorder rounded-[14px] bg-[#1f1f1f] shadow-inner-shadow-dark-float  ${className}`}
    >
      {children}
    </div>
  );
};
