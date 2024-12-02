import { BugIcon } from "lucide-react";
import { useState } from "react";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black/50">
          <div></div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white rounded-full  duration-300 h-14 w-14 flex items-center justify-center`}
      >
        <BugIcon />
      </div>
    </>
  );
};
