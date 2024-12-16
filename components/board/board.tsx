interface BoardProps {
  children: React.ReactNode;
}

export const Board = ({ children }: BoardProps) => {
  return (
    <div className="flex-1 overflow-y-auto flex justify-center z-10">
      {children}
    </div>
  );
};
