import { signOut } from "@/actions/server/sign-out";
import { updatePlayerInfoServer } from "@/actions/server/update-player-info";
import ManageSubscription from "@/components/subscriptions/manage-subscription";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { motion, AnimatePresence } from "framer-motion";
import { LogOutIcon, SettingsIcon, Volume2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Support } from "../../support";
import { useSettingStore } from "@/stores/useSettingStore";
import { usePathname } from "next/navigation";

export default function PlayerLevel() {
  const { info, updateLevel, setXp, isSubscribed, checkSubscription } =
    usePlayerStore();
  const { isMuted, setIsMuted } = useSettingStore();
  const [setting, setSetting] = useState(false);

  const percentage = (info.xp / 100) * 100;

  useEffect(() => {
    checkSubscription();
  }, []);

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
            className={`${
              isSubscribed ? "-top-[4.5rem]" : "-top-[17.5rem]"
            } absolute flex flex-col gap-2 text-sm items-center justify-between bg-[#fafafa] border border-black/10 shadow-sm w-full rounded-xl left-0 lg:p-2 p-1`}
          >
            <div className="flex justify-between items-center w-full bg-[#fafafa] border border-black/10 shadow-sm p-2 rounded-xl">
              <div className="flex justify-between  items-center">
                <div className="flex items-center gap-2">
                  <div className="">
                    <div
                      onClick={handleSoundToggle}
                      className={`${
                        !isMuted ? "mainBgColor" : "bg-black/5"
                      } h-8 w-8 flex justify-center items-center border border-black/10 shadow-sm rounded-lg`}
                    >
                      <Volume2Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <button className="  h-8 w-8 flex justify-center items-center border border-black/10 shadow-sm   rounded-lg">
                    <ManageSubscription />
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 h-8 w-8 flex justify-center items-center border border-black/10 shadow-sm text-white  rounded-lg"
                >
                  <LogOutIcon strokeWidth={1.7} className="w-4 h-4 " />
                </button>
              </div>
            </div>

            <Support />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#fafafa] col-span-10 w-full flex flex-col lg:gap-2 gap-1 relative overflow-hidden rounded-xl lg:p-2 p-1 border border-black/10 shadow-sm ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#efcb68] border border-black/10 shadow-sm z-20  font-medium rounded-lg p-1 lg:w-8 lg:h-8 h-6 w-6 aspect-square flex justify-center items-center">
              {info.level}
            </div>

            <div className="z-10 font-medium leading-none text-center w-full">
              <p className="font-medium ">{info.username}</p>
            </div>
          </div>

          <div
            onClick={() => setSetting(!setting)}
            className={`${
              setting ? "bg-black text-white" : "bg-white text-black"
            }  h-6 w-6 lg:h-8 lg:w-8 rounded-lg flex justify-center items-center border border-black/10 shadow-sm`}
          >
            <SettingsIcon strokeWidth={1.7} className="h-4 w-4" />
          </div>
        </div>

        <div className="rounded-lg font-medium overflow-hidden">
          <div className="relative lg:h-8 h-6">
            <motion.div
              className={`absolute ${
                percentage === 0 ? "hidden" : ""
              } top-0 left-0 h-full bg-[#efcb68] border rounded-l-lg shadow-sm border-black/10 ${
                percentage === 100 ? "rounded-r-lg" : ""
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className={`absolute top-0 right-0 h-full bg-white border-y border-r shadow-sm border-black/10 ${
                percentage === 0 ? "border-l rounded-lg" : "rounded-r-lg"
              } ${percentage === 100 ? "hidden" : ""}`}
              animate={{ width: `${100 - percentage}%` }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute leading-none w-full h-full flex gap-1 items-center justify-center text-center z-10">
              <p>{info.xp}</p> <p className="">/</p> <p>100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
