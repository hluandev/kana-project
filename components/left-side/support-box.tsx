import { CheckIcon, DotIcon, SparkleIcon } from "lucide-react";

interface SupportBoxProps {
  text: string;
}

export const SupportBox = ({ text }: SupportBoxProps) => {
  return (
    <div className="grid grid-cols-12 gap-2 text-black/80">
      <CheckIcon strokeWidth={1.5} className="w-3.5 h-3.5 col-span-1" />{" "}
      <p className="leading-none col-span-11 text-sm">{text}</p>
    </div>
  );
};
