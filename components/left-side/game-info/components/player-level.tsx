import { signOut } from "@/actions/server/sign-out";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import ManageSubscription from "@/components/subscriptions/manage-subscription";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { motion, AnimatePresence } from "framer-motion";
import { LogOutIcon, Volume2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Support } from "../../support";
import { useSettingStore } from "@/stores/useSettingStore";
import { useSubscription } from "@/actions/client/useSubscription";

export default function PlayerLevel() {
  const { info, updateLevel, setXp } = usePlayerStore();
  const { isMuted, setIsMuted } = useSettingStore();
  const { isSubscribed } = useSubscription();
  const [setting, setSetting] = useState(false);

  const percentage = (info.xp / 100) * 100;

  useEffect(() => {
    const handleLevelUp = async () => {
      if (info.xp >= 100) {
        if (info.level >= 10 && !isSubscribed) {
          setXp(100);
          return;
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

  useEffect(() => {
    const storedMuted = localStorage.getItem("isMuted") === "true";
    setIsMuted(storedMuted);
  }, []);

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative flex gap-2 items-center">
      <AnimatePresence>
        {setting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -top-72 flex flex-col gap-2 text-sm  items-center justify-between  bg-white border border-black/15 shadow-sm w-full rounded-xl left-0 p-2 "
          >
            <div className="flex justify-between items-center w-full bg-black/5 border border-black/15 shadow-inner p-2 rounded-xl">
              <div className="flex justify-between  items-center">
                <div className="font-medium">{info.username}</div>
              </div>

              <div className="flex gap-2">
                <div className="">
                  <div
                    onClick={handleSoundToggle}
                    className={`${
                      !isMuted ? "mainBgColor" : "bg-black/5"
                    } h-8 w-8 flex justify-center items-center border border-black/15 shadow-sm rounded-lg`}
                  >
                    <Volume2Icon className="h-4 w-4" />
                  </div>
                </div>

                <button className="  h-8 w-8 flex justify-center items-center border border-black/15 shadow-sm   rounded-lg">
                  <ManageSubscription />
                </button>

                <button
                  onClick={() => signOut()}
                  className="bg-red-600 h-8 w-8 flex justify-center items-center border border-black/15 shadow-sm text-white  rounded-lg"
                >
                  <LogOutIcon strokeWidth={1.7} className="w-4 h-4 " />
                </button>
              </div>
            </div>

            <Support />
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
