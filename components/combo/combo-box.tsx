import { XIcon } from "lucide-react";

interface ComboBoxProps {
  title: string;
  description: string;
  example: string;
  point: number;
  multiplier: number;
}

export const ComboBox = ({
  title,
  description,
  example,
  point,
  multiplier,
}: ComboBoxProps) => {
  return (
    <div className="flex items-start gap-16 justify-between">
      <div>
        <p>
          <span className="text-lg font-medium">{title}</span>: {description}
        </p>
        <div className="">{example}</div>
      </div>

      <div className="text-2xl font-semibold flex items-center gap-1">
        <span className="text-green-500">{point}</span>{" "}
        <XIcon className="w-4 h-4" />{" "}
        <span className="text-purple-600">{multiplier}</span>
      </div>
    </div>
  );
};
