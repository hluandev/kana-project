"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";

interface DataInitProps {
  initialData: any[];
  initialMissions: any[];
  initialSpecial: any[];
  initialPlayerInfo: any;
  isSubscribed?: boolean;
}

export const DataInit = ({
  initialData,
  initialMissions,
  initialSpecial,
  initialPlayerInfo,
  isSubscribed,
}: DataInitProps) => {
  const { setKana, setKanaMissions, setKanaSpecial } = useKanaStore();
  const { setInfo } = usePlayerStore();

  useEffect(() => {
    setKana(initialData);
    setKanaMissions(initialMissions);
    setKanaSpecial(initialSpecial);
    setInfo(initialPlayerInfo);
  }, []);

  return null;
};
