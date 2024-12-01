import { SparkleIcon } from "lucide-react";

interface SupportBoxProps {
  text: string;
}

export const SupportBox = ({ text }: SupportBoxProps) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <SparkleIcon className="w-4 h-4 col-span-1" />{" "}
      <p className="leading-none col-span-11">{text}</p>
    </div>
  );
};
