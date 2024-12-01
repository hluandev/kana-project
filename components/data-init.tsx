"use client";

import { useKanaStore } from "@/stores/useKanaStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useScoreStore } from "@/stores/useScoreStore";
import { useEffect } from "react";

interface DataInitProps {
  initialData: any[];
  initialMissions: any[];
  initialSpecial: any[];
  initialPlayerInfo: any;
  initialLeaderboard: any[];
  isSubscribed?: boolean;
}

export const DataInit = ({
  initialData,
  initialMissions,
  initialSpecial,
  initialPlayerInfo,
  initialLeaderboard,
}: DataInitProps) => {
  const { setKana, setKanaMissions, setKanaSpecial } = useKanaStore();
  const { setInfo } = usePlayerStore();
  const { setLeaderboard } = useScoreStore();

  useEffect(() => {
    setKana(initialData);
    setKanaMissions(initialMissions);
    setKanaSpecial(initialSpecial);
    setInfo(initialPlayerInfo);
    setLeaderboard(initialLeaderboard);
  }, []);

  return null;
};
