interface DocDescProps {
  title: string;
  children: React.ReactNode;
}

export default function DocDesc({ title, children }: DocDescProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold leading-none">{title}</h3>
      <div className="space-y-2 font-normal">{children}</div>
    </div>
  );
}
