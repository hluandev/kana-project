"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useEffect } from "react";

interface DataInitProps {
  initialData: any[];
  initialMissions: any[];
}

export const DataInit = ({ initialData, initialMissions }: DataInitProps) => {
  const { setKana, setKanaMissions } = useKanaStore();

  useEffect(() => {
    setKana(initialData);
    setKanaMissions(initialMissions);
  }, []);

  return null;
};
