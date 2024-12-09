"use client";

import { fetchMessagesServer } from "@/actions/server/use-server/fetch-message-server";
import { useInboxStore } from "@/stores/useInboxStore";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Inbox() {
  const { messages, setMessages } = useInboxStore();

  return (
    <div className="space-y-3 bg-white p-3 rounded-xl border border-black/10 shadow-sm max-w-xl text-sm mx-auto h-full overflow-y-auto">
      <h1 className="text-base leading-none font-medium text-black/50">
        Inbox for your reports and feedbacks
      </h1>
      <div className="space-y-3">
        {messages.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-xs text-gray-500 leading-none">
              <Loader2 className="animate-spin" />
            </p>
          </div>
        ) : (
          messages.map((item) => (
            <div
              key={item.report_id}
              className="flex flex-col gap-2 bg-black/5 p-2 rounded-xl border border-black/10 shadow-inner"
            >
              <div className="flex justify-between">
                <p className="text-xs text-gray-500 leading-none">
                  {item.type} | {item.created_at.slice(0, 10)}
                </p>

                {!item.response && (
                  <p className="text-xs text-gray-500 leading-none">
                    Waiting for response...
                  </p>
                )}
              </div>

              <div className="flex items-start flex-col gap-2 ">
                <p className=" bg-white rounded-lg p-2 w-2/3 border border-black/20 shadow-sm">
                  {item.text}
                </p>
              </div>
              {item.response && (
                <div className="flex justify-end">
                  <p className=" bg-[#efcb68] w-2/3 rounded-lg p-2 border border-black/10 shadow-sm">
                    {item.response}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
