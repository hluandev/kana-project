import { ChangeEventHandler } from "react";

interface VirtualKeyboardProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const VirtualKeyboard = ({
  handleChange,
  value,
}: VirtualKeyboardProps) => {
  const createSyntheticEvent = (item: string) => {
    return {
      target: { value: item },
      type: "click",
    } as React.ChangeEvent<HTMLInputElement>;
  };

  return (
    <div className="lg:hidden fixed left-1/2 w-full -translate-x-1/2 bottom-2 flex flex-col items-center gap-1">
      {/* Top row */}
      <div className="grid grid-cols-10 gap-1">
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((item) => (
          <button
            onClick={() => handleChange(createSyntheticEvent(item))}
            key={item}
            className="bg-white border active:bg-black/20 border-black/10 shadow-sm rounded-md aspect-square w-7 text-sm"
          >
            {item}
          </button>
        ))}
      </div>
      {/* Middle row */}
      <div className="grid grid-cols-9 gap-1">
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((item) => (
          <button
            onClick={() => handleChange(createSyntheticEvent(item))}
            key={item}
            className="bg-white border active:bg-black/20 border-black/10 shadow-sm rounded-md aspect-square w-7 text-sm"
          >
            {item}
          </button>
        ))}
      </div>
      {/* Bottom row */}
      <div className="grid grid-cols-7 w-fit gap-1">
        {["z", "x", "c", "v", "b", "n", "m"].map((item) => (
          <button
            onClick={() => handleChange(createSyntheticEvent(item))}
            key={item}
            className="bg-white border active:bg-black/20 border-black/10 shadow-sm rounded-md aspect-square w-7 text-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
