interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={` rounded-[14px] shadow-sm bg-[#fffefe] border border-black/10 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
