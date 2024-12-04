import { signOut } from "@/actions/server/sign-out";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import ManageSubscription from "@/components/subscriptions/manage-subscription";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { motion, AnimatePresence } from "framer-motion";
import { LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function PlayerLevel() {
  const { info, updateLevel, setXp } = usePlayerStore();
  const [setting, setSetting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const percentage = (info.xp / 100) * 100;

  useEffect(() => {
    const handleLevelUp = async () => {
      if (info.xp >= 100) {
        if (info.level === 10) {
          const response = await fetch("/api/stripe/status");
          const { isSubscribed } = await response.json();
          if (!isSubscribed) {
            setXp(100);
            return;
          }
        }

        const remainingXp = info.xp - 100;
        updateLevel(info.level + 1);
        setXp(remainingXp);
        updatePlayerInfoServer({
          id: info.id,
          level: info.level + 1,
          xp: remainingXp,
        });
      }
    };

    handleLevelUp();
  }, [info.xp]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative flex gap-2 items-center">
      <AnimatePresence>
        {setting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -top-40 text-sm  bg-white border border-black/15 shadow-sm w-full rounded-xl left-0 "
          >
            <div className="flex justify-between border-b  items-center p-2">
              <div className="font-medium text-base">{info.username}</div>
              <button
                onClick={() => signOut()}
                className="bg-red-600/30 border  border-black/15 shadow-sm text-white p-2 rounded-lg"
              >
                <LogOutIcon className="w-4 h-4 text-red-600" />
              </button>
            </div>
            <div className="px-2 py-4 border-b">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="w-5 h-5 border p-0.5 border-gray-400 rounded-md flex items-center justify-center mr-2">
                  {isChecked && (
                    <span className="w-full h-full rounded-sm bg-black"></span>
                  )}
                </span>
                <p className="leading-none">Sound effects</p>
              </label>
            </div>

            <ManageSubscription />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={() => setSetting(!setting)}
        className="bg-white col-span-10 w-full relative overflow-hidden rounded-2xl p-1.5 border border-black/15 shadow-sm flex items-center gap-2"
      >
        <div className="bg-[#efcb68] border border-black/15 shadow-sm z-20  font-medium  rounded-xl p-1 w-9 h-9 aspect-square flex justify-center items-center">
          {info.level}
        </div>

        <div className="z-10 absolute left-1/2 -translate-x-1/2 font-medium leading-none text-center w-full">
          {/* <p className="font-medium">{info.username}</p> */}
          <p className="text-sm">{info.xp}/100</p>
        </div>

        <motion.div
          className="bg-[#efcb68] bg-opacity-40 absolute left-0 h-full "
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
