import { ChangeEventHandler } from "react";

interface VirtualKeyboardProps {
  handleChange: (value: string) => void;
  value: string;
}

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  handleChange,
  value,
}) => {
  const handleClick = (key: string) => {
    handleChange(key);
  };

  return (
    <div className="lg:hidden fixed left-1/2 w-full -translate-x-1/2 bottom-3 flex flex-col items-center gap-1">
      {/* Top row */}
      <div className="grid grid-cols-10 gap-1">
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="bg-white border active:bg-black/20   rounded-md aspect-square w-8 "
          >
            {item}
          </button>
        ))}
      </div>
      {/* Middle row */}
      <div className="grid grid-cols-9 gap-1">
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="bg-white border active:bg-black/20   rounded-md aspect-square w-8 "
          >
            {item}
          </button>
        ))}
      </div>
      {/* Bottom row */}
      <div className="grid grid-cols-8 w-fit gap-1">
        {["z", "x", "c", "v", "b", "n", "m", "/"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="bg-white border active:bg-black/20   rounded-md aspect-square w-8 "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
