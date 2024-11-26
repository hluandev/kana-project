interface BoardProps {
  children: React.ReactNode;
}

export const Board = async ({ children }: BoardProps) => {
  return <div className="flex-1 py-4 flex justify-center">{children}</div>;
};
