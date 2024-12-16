"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchVideoUrl(path: string) {
  const supabase = await createClient();

  // First check if bucket exists
  const { data: buckets } = await supabase.storage.listBuckets();
  const videoBucket = buckets?.find((bucket) => bucket.name === "videos");

  if (!videoBucket) {
    console.log("Videos bucket not found");
  }

  // Get the signed URL for the video
  const { data, error } = await supabase.storage
    .from("videos")
    .createSignedUrl(path, 3600); // URL valid for 1 hour

  if (error) {
    console.error("Error fetching video:", error);
    throw error;
  }

  return data?.signedUrl;
}
