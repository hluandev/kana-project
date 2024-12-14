import { useEffect, useState } from "react";
import { useVideoStore } from "@/stores/useVideoStore";

export function useVideoUrl(path: string | undefined) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { videos, fetchVideo } = useVideoStore();

  useEffect(() => {
    const getVideoUrl = async () => {
      if (!path) {
        setLoading(false);
        return;
      }

      try {
        await fetchVideo(path);
      } catch (err) {
        setError("Failed to load video");
        console.error("Error loading video:", err);
      } finally {
        setLoading(false);
      }
    };

    getVideoUrl();
  }, [path, fetchVideo]);

  return { videoUrl: videos[path ?? ""], loading, error };
}
