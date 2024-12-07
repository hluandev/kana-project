import { sendFeedback, sendReport } from "@/actions/server/send-report";
import { motion } from "framer-motion";
import { BugIcon, Loader2, Send, XIcon } from "lucide-react";
import { useState } from "react";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed flex justify-center items-center z-50 top-0 left-0 w-full h-full bg-black/50">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl w-1/4 h-1/3 p-4 flex flex-col gap-y-2"
          >
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-2 items-center ">
                <h2
                  onClick={() => setFeedback(false)}
                  className={`font-semibold ${
                    feedback
                      ? "bg-[#fafafa]"
                      : "bg-black/5  border border-black/15 shadow-sm "
                  } px-2 py-1 rounded-lg`}
                >
                  Report bugs
                </h2>
                <h2
                  onClick={() => setFeedback(true)}
                  className={`font-semibold ${
                    feedback
                      ? " bg-black/5  border border-black/15 shadow-sm"
                      : "bg-[#fafafa] "
                  } px-2 py-1 rounded-lg`}
                >
                  Send feedback
                </h2>
              </div>
              <XIcon onClick={() => setIsOpen(false)} />
            </div>
            <textarea
              placeholder={
                feedback
                  ? "Any feedback would be highly appreciated. Thank you!"
                  : "Please describe the bug in details as much as possible and steps to reproduce it. Thank you!"
              }
              className="w-full border text-[0.9rem] h-full border-black/20 rounded-lg p-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
              onClick={async () => {
                setLoading(true);
                feedback ? await sendFeedback(text) : await sendReport(text);
                setText("");
                setIsOpen(false);
                setLoading(false);
              }}
              className="bg-black text-white rounded-lg py-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}

              <p className="text-[0.9rem]">{feedback ? "Send" : "Report"}</p>
            </button>
          </motion.div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white rounded-xl border border-black/15 shadow-sm  duration-300 h-12 w-12 flex items-center justify-center`}
      >
        <BugIcon className="w-5 h-5" strokeWidth={1.5} />
      </div>
    </>
  );
};
