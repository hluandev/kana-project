import { CheckIcon, DotIcon, SparkleIcon } from "lucide-react";

interface SupportBoxProps {
  text: string;
}

export const SupportBox = ({ text }: SupportBoxProps) => {
  return (
    <div className="grid grid-cols-12 text-black/80">
      <CheckIcon strokeWidth={1.5} className="w-4 pt-1 h-4 col-span-1" />{" "}
      <p className=" col-span-11 text-sm">{text}</p>
    </div>
  );
};
