"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useEffect } from "react";

interface DataInitProps {
  initialData: any[];
  initialMissions: any[];
  initialSpecial: any[];
}

export const DataInit = ({
  initialData,
  initialMissions,
  initialSpecial,
}: DataInitProps) => {
  const { setKana, setKanaMissions, setKanaSpecial } = useKanaStore();

  useEffect(() => {
    setKana(initialData);
    setKanaMissions(initialMissions);
    setKanaSpecial(initialSpecial);
  }, []);

  return null;
};
