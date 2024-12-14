import { useEffect, useState } from "react";
import { fetchVideoUrl } from "@/actions/server/use-server/fetch-video-server";

export function useVideoUrl(path: string | undefined) {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVideoUrl = async () => {
      if (!path) {
        setLoading(false);
        return;
      }

      try {
        const url = await fetchVideoUrl(path);
        if (url) {
          setVideoUrl(url);
        } else {
          setError("No URL returned");
        }
      } catch (err) {
        setError("Failed to load video");
        console.error("Error loading video:", err);
      } finally {
        setLoading(false);
      }
    };

    getVideoUrl();
  }, [path]);

  return { videoUrl, loading, error };
}
