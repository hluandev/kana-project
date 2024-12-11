"use client";

import { useEffect } from "react";
import {
  fetchMessagesServer,
  setMessageReadServer,
} from "@/actions/server/use-server/fetch-message-server";
import { LinkNav } from "./link-nav";
import { useInboxStore } from "@/stores/useInboxStore";
import { useState } from "react";

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

      <div className="max-lg:hidden flex flex-col">
        <div className="flex flex-col gap-2">
          <p>Arena</p>
          <LinkNav href="/menu/play">Play</LinkNav>
          <LinkNav href="/menu/docs">How to play</LinkNav>
          <LinkNav href="/menu/leaderboard">Leaderboard</LinkNav>
          <LinkNav href="/menu/activity">Activity</LinkNav>
        </div>
        <div className="flex flex-col gap-2">
          <LinkNav onClick={handleInboxClick} href="/menu/inbox">
            Inbox ({unreadCount})
          </LinkNav>
          <LinkNav blank href="https://x.com/ru_an_ng">
            Social
          </LinkNav>
        </div>
      </div>
    </>
  );
};
