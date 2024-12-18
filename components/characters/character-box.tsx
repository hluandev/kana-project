import { updatePlayerCharacter } from "@/actions/server/use-server/update-player-character";
import { useVideoUrl } from "@/hooks/useVideoUrl";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Loader2Icon } from "lucide-react";

interface CharacterBoxProps {
  videoSrc: string;
  name: string;
}

export const CharacterBox = ({ videoSrc, name }: CharacterBoxProps) => {
  const { videoUrl, loading } = useVideoUrl(videoSrc);
  const { info, updateCharacter } = usePlayerStore();

  return (
    <div className="flex justify-between items-center relative h-full w-full overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Loader2Icon className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full p-4">
          <div className="text-xl font-semibold">
            {name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}
          </div>

          <button
            onClick={async () => {
              if (info.character === name) {
              } else {
                updateCharacter(name);
                await updatePlayerCharacter(name);
              }
            }}
            className={`${
              info.character === name ? "bg-purple-500/80" : "bg-black/80"
            } backdrop-blur-xl z-50 py-2 px-4 rounded-full w-fit`}
          >
            {info.character === name ? "Selected" : "Select"}
          </button>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};
