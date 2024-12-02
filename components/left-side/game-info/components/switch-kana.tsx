"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useEffect } from "react";

export const SwitchKana = () => {
  const { hiragana, setHiragana } = useKanaStore();

  useEffect(() => {
    const stored = localStorage.getItem("hiragana");
    if (stored !== null) {
      setHiragana(stored === "true");
    }
  }, [setHiragana]);

  const handleKanaSwitch = (value: boolean) => {
    setHiragana(value);
    localStorage.setItem("hiragana", value.toString());
  };

  return (
    <div className="bg-white flex-1 font-medium rounded-full p-2 grid grid-cols-2 gap-2">
      <button
        onClick={() => handleKanaSwitch(true)}
        className={`rounded-full  py-2 ${
          hiragana ? "bg-[#f2f3f7]" : "bg-white"
        }`}
      >
        Hiragana
      </button>
      <button
        onClick={() => handleKanaSwitch(false)}
        className={`rounded-full py-2 ${
          hiragana ? "bg-white" : "bg-[#f2f3f7]"
        }`}
      >
        Katakana
      </button>
    </div>
  );
};
