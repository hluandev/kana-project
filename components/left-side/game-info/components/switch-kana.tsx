"use client";

import { useKanaStore } from "@/stores/useKanaStore";

export const SwitchKana = () => {
  const { hiragana, setHiragana } = useKanaStore();

  return (
    <div className="bg-white font-medium rounded-full p-2 grid grid-cols-2 gap-2">
      <button
        onClick={() => setHiragana(true)}
        className={`rounded-full  py-2 ${
          hiragana ? "bg-[#f2f3f7]" : "bg-white"
        }`}
      >
        Hiragana
      </button>
      <button
        onClick={() => setHiragana(false)}
        className={`rounded-full py-2 ${
          hiragana ? "bg-white" : "bg-[#f2f3f7]"
        }`}
      >
        Katakana
      </button>
    </div>
  );
};
