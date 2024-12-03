interface BoardProps {
  children: React.ReactNode;
}

export const Board = async ({ children }: BoardProps) => {
  return <div className="flex-1 p-4 flex justify-center z-10">{children}</div>;
};
