import { Loader2Icon } from "lucide-react";

interface ActivityBoxProps {
  title: string;
  value: number;
  textColor?: string;
  loading?: boolean;
}

export const ActivityBox = ({
  title,
  value,
  textColor,
  loading,
}: ActivityBoxProps) => {
  return (
    <div className="bg-white p-4 border border-black/15 shadow-sm rounded-2xl space-y-3">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2Icon className="animate-spin" />
        </div>
      ) : (
        <>
          <p className=" text-sm">{title}</p>
          <p className={` font-semibold ${textColor}`}>{value}</p>
        </>
      )}
    </div>
  );
};
