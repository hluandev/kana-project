import { signOut } from "@/actions/server/sign-out";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import ManageSubscription from "@/components/subscriptions/manage-subscription";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { motion, AnimatePresence } from "framer-motion";
import { SettingsIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function PlayerLevel() {
  const { info, updateLevel, setXp } = usePlayerStore();
  const [setting, setSetting] = useState(false);

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

  return (
    <div className="relative flex gap-2 items-center">
      <AnimatePresence>
        {setting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -top-32 space-y-2 bg-white w-full p-2 rounded-2xl left-0 "
          >
            <ManageSubscription />
            <button
              onClick={() => signOut()}
              className="bg-red-600 w-full text-white p-3 rounded-lg"
            >
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white col-span-10 w-full relative overflow-hidden rounded-full p-2 flex items-center gap-2">
        <div className="bg-[#1d1d1f] z-20 text-white font-medium text-xl rounded-full p-2 w-12 aspect-square flex justify-center items-center">
          {info.level}
        </div>

        <div className="z-10">
          <p className="text-xl font-medium">{info.first_name}</p>
          <p className="text-sm">{info.xp}/100</p>
        </div>

        <motion.div
          className="bg-[#efcb68] absolute left-0 h-full "
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div
        onClick={() => setSetting(!setting)}
        className="p-5 bg-white z-20 cursor-pointer rounded-full flex justify-center items-center"
      >
        <SettingsIcon className="" />
      </div>
    </div>
  );
}
