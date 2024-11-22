interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps) => {
  return (
    <div className="w-40 h-56 px-2 py-1 border-[#2e3032] bg-[#1e2022] border rounded-md">
      {text}
    </div>
  );
};
