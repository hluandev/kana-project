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
      } h-10 w-10 flex justify-center duration-200 items-center  rounded-lg`}
    >
      <Volume2Icon className="h-5 w-5" />
    </div>
  );
}
