"use client";

import { useEffect } from "react";
import {
  fetchMessagesServer,
  setMessageReadServer,
} from "@/actions/server/use-server/fetch-message-server";
import { LinkNav } from "./link-nav";
import { useInboxStore } from "@/stores/useInboxStore";
import { useState } from "react";
import {
  ActivityIcon,
  BookIcon,
  InboxIcon,
  SwordsIcon,
  TrophyIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

export const Nav = () => {
  const { messages, setMessages } = useInboxStore();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await fetchMessagesServer();
      setMessages(messages || []);
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const count = messages.filter((msg) => !msg.read).length;
    setUnreadCount(count);
  }, [messages]);

  const handleInboxClick = async () => {
    const updatedMessages = await setMessageReadServer();
    if (updatedMessages) {
      setMessages(updatedMessages);
    }
  };

  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden flex max-lg:justify-between max-lg:px-2 max-lg:py-1 lg:flex-col">
        <LinkNav href="/menu/play">Play</LinkNav>
        <LinkNav href="/menu/docs">How to play</LinkNav>
        <LinkNav href="/menu/leaderboard">Leaderboard</LinkNav>
        <LinkNav href="/menu/activity">Activity</LinkNav>
        {/* <LinkNav onClick={handleInboxClick} href="/menu/inbox">
          Inbox ({unreadCount})
        </LinkNav>
        <LinkNav blank href="https://x.com/ru_an_ng">
          Social
        </LinkNav> */}
      </div>

      <div className="max-lg:hidden flex flex-col gap-6 pt-2">
        <img src="/img/logo.svg" alt="Kamikana" className="w-11 h-11" />

        <div className="flex flex-col gap-1.5">
          <p className="px-2.5 font-semibold text-neutral-500">Arena</p>
          <LinkNav
            icon={<SwordsIcon className="w-[1.1rem] h-[1.1rem]" />}
            href="/menu/play"
          >
            Play
          </LinkNav>
          <LinkNav
            icon={<BookIcon className="w-[1.1rem] h-[1.1rem]" />}
            href="/menu/docs"
          >
            How to play
          </LinkNav>
          <LinkNav
            icon={<TrophyIcon className="w-[1.1rem] h-[1.1rem]" />}
            href="/menu/leaderboard"
          >
            Leaderboard
          </LinkNav>
          <LinkNav
            icon={<ActivityIcon className="w-[1.1rem] h-[1.1rem]" />}
            href="/menu/activity"
          >
            Activity
          </LinkNav>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="px-2.5 font-semibold text-neutral-500">Communication</p>
          <LinkNav
            icon={<InboxIcon className="w-[1.1rem] h-[1.1rem]" />}
            onClick={handleInboxClick}
            href="/menu/inbox"
          >
            Inbox ({unreadCount})
          </LinkNav>
          <LinkNav
            icon={<UserIcon className="w-[1.1rem] h-[1.1rem]" />}
            blank
            href="https://x.com/ru_an_ng"
          >
            Social
          </LinkNav>
        </div>
      </div>
    </>
  );
};
