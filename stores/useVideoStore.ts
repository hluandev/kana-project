import { create } from "zustand";
import { fetchVideoUrl } from "@/actions/server/use-server/fetch-video-server";

interface VideoStore {
  videos: Record<string, string>;
  setVideo: (path: string, url: string) => void;
  fetchVideo: (path: string) => Promise<string | undefined>;
}

export const useVideoStore = create<VideoStore>((set, get) => ({
  videos: {},
  setVideo: (path, url) =>
    set((state) => ({
      videos: { ...state.videos, [path]: url },
    })),
  fetchVideo: async (path) => {
    const videos = get().videos;
    if (videos[path]) {
      return videos[path];
    }

    try {
      const url = await fetchVideoUrl(path);
      if (url) {
        get().setVideo(path, url);
        return url;
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  },
}));
