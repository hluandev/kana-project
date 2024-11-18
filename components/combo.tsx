"use client";

import { useComboStore } from "@/store/useComboStore";
import { ComboText } from "./combo-text";

export const Combo = () => {
  const { combo } = useComboStore();

  return (
    <div className="text-8xl space-y-2 absolute right-20 top-1/4 -translate-y-1/2">
      {combo.length === 0 && null}

      {combo.length === 1 && (
        <ComboText text="D" desc="いい" className="text-[#cfb49d]" />
      )}

      {combo.length === 2 && (
        <ComboText text="C" desc="すごい" className="text-[#c99e8d]" />
      )}

      {combo.length === 3 && (
        <ComboText text="B" desc="最高" className="text-[#e4e4ef]" />
      )}

      {combo.length === 4 && (
        <ComboText text="A" desc="超すごい" className="text-yellow-400" />
      )}

      {combo.length === 5 && (
        <ComboText text="S" desc="やばい" className="text-cyan-500" />
      )}

      {combo.length === 6 && (
        <ComboText text="SS" desc="神" className="text-blue-600" />
      )}

      {combo.length === 7 && (
        <ComboText text="SSS" desc="神業" className="text-red-600" />
      )}
    </div>
  );
};
