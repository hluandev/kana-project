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
    <div className="bg-black/5 border text-[0.9rem] border-black/15 shadow-inner flex-1  rounded-md p-2 grid grid-cols-2 gap-2">
      <button
        onClick={() => handleKanaSwitch(true)}
        className={`rounded-md  py-1 ${
          hiragana ? "" : "bg-white border border-black/15 shadow-sm"
        }`}
      >
        Hiragana
      </button>
      <button
        onClick={() => handleKanaSwitch(false)}
        className={`rounded-md py-1 ${
          hiragana ? "bg-white border border-black/15 shadow-sm" : ""
        }`}
      >
        Katakana
      </button>
    </div>
  );
};
