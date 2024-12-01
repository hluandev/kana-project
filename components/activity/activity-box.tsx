interface ActivityBoxProps {
  title: string;
  value: number;
}

export const ActivityBox = ({ title, value }: ActivityBoxProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl space-y-2">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-4xl font-semibold">{value}</p>
    </div>
  );
};
