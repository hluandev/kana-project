"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { useEffect } from "react";

export const DataInit = ({ initialData }: { initialData: any[] }) => {
  const { setKana } = useKanaStore();

  useEffect(() => {
    setKana(initialData);
  }, []);

  return <div className="hidden" />;
};
