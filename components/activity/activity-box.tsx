interface ActivityBoxProps {
  title: string;
  value: number;
  textColor?: string;
}

export const ActivityBox = ({ title, value, textColor }: ActivityBoxProps) => {
  return (
    <div className="bg-white p-4 border border-black/15 shadow-sm rounded-2xl space-y-2">
      <p className=" font-medium">{title}</p>
      <p className={` font-semibold ${textColor}`}>{value}</p>
    </div>
  );
};
