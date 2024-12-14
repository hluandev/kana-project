import { useVideoUrl } from "@/hooks/useVideoUrl";

interface AvatarsBgProps {
  videoSrc: string;
  left?: boolean;
}

export default function AvatarsBg({ videoSrc, left }: AvatarsBgProps) {
  const { videoUrl, loading } = useVideoUrl(videoSrc);

  return (
    <>
      {!loading && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute ${
            left ? "left-0" : "right-0"
          } w-1/2 h-full object-cover mix-blend-overlay pointer-events-none`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </>
  );
}
