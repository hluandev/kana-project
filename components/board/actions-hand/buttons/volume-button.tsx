import { useSettingStore } from "@/stores/useSettingStore";
import { Volume2Icon } from "lucide-react";
import { useEffect } from "react";

export default function VolumeButton() {
  const { isMuted, setIsMuted } = useSettingStore();

  useEffect(() => {
    const storedMuted = localStorage.getItem("isMuted") === "true";
    setIsMuted(storedMuted);
  }, []);

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      onClick={handleSoundToggle}
      className={`${
        !isMuted ? "bg-white/15" : "bg-red-600/60"
      } lg:h-10 lg:w-10 h-8 w-8 flex justify-center duration-200 items-center  rounded-lg`}
    >
      <Volume2Icon className="lg:h-5 lg:w-5 h-4 w-4" />
    </div>
  );
}
