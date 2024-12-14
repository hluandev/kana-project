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
    <div className="bg-neutral-800 lg:p-4 p-2  rounded-xl ">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2Icon className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col justify-between lg:gap-2 h-full">
          <p className=" ">{title}</p>
          <p className={` font-semibold ${textColor}`}>{value}</p>
        </div>
      )}
    </div>
  );
};
