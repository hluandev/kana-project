interface SpecialCardProps {
  japanese: string;
}

export default function SpecialCard({ japanese }: SpecialCardProps) {
  return (
    <div>
      <p>{japanese}</p>
    </div>
  );
}
