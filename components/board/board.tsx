"use client";

import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";

interface BoardProps {
  children: React.ReactNode;
}

export const Board = ({ children }: BoardProps) => {
  const { checkSubscription } = usePlayerStore();

  useEffect(() => {
    checkSubscription();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto flex justify-center z-10">
      {children}
    </div>
  );
};
