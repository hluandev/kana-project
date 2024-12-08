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
    <div className="bg-black/5 text-sm border text-sm border-black/10 shadow-inner flex-1  rounded-xl p-1 grid grid-cols-2 gap-2">
      <button
        onClick={() => handleKanaSwitch(true)}
        className={`rounded-lg  py-2 ${
          hiragana ? "bg-white border border-black/10 shadow-sm" : ""
        }`}
      >
        Hiragana
      </button>
      <button
        onClick={() => handleKanaSwitch(false)}
        className={`rounded-lg py-2 ${
          hiragana ? "" : "bg-white border border-black/10 shadow-sm"
        }`}
      >
        Katakana
      </button>
    </div>
  );
};
