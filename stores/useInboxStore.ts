import { create } from "zustand";

interface Message {
  report_id: number;
  id: string;
  text: string;
  type: "report" | "feedback";
  created_at: string;
  response: string;
  read: boolean;
}

interface inboxStore {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export const useInboxStore = create<inboxStore>((set, get) => ({
  messages: [],
  setMessages: (messages: Message[]) => set({ messages }),
}));
