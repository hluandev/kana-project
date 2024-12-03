import { sendReport } from "@/actions/server/send-report";
import { BugIcon, Loader2, Send, XIcon } from "lucide-react";
import { useState } from "react";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed flex justify-center items-center z-50 top-0 left-0 w-full h-full bg-black/50">
          <div className="bg-white rounded-md w-1/4 h-1/3 p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Report bugs</h2>
              <XIcon onClick={() => setIsOpen(false)} />
            </div>
            <textarea
              placeholder="Please describe the bug in details as much as possible and steps to reproduce it. Thank you!"
              className="w-full border h-full border-black/20 rounded-lg p-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
              onClick={async () => {
                setLoading(true);
                await sendReport(text);
                setText("");
                setIsOpen(false);
                setLoading(false);
              }}
              className="bg-black text-white rounded-lg py-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}

              <p>Send</p>
            </button>
          </div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white rounded-md  duration-300 h-12 w-12 flex items-center justify-center`}
      >
        <BugIcon className="w-5 h-5" strokeWidth={1.5} />
      </div>
    </>
  );
};
