interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-[#161716] p-4 border border-neutral-800 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}
