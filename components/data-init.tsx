"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useEffect } from "react";

interface DataInitProps {
  initialData: any[];
}

export const DataInit = ({ initialData }: DataInitProps) => {
  const { setKana } = useKanaStore();

  useEffect(() => {
    setKana(initialData);
  }, []);

  return null;
};
