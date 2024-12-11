import { PlayBox } from "@/components/play/play-box";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Play() {
  return (
    <div className="w-full grid grid-cols-5 gap-2 ">
      <PlayBox
        linkText="Play"
        href="/menu/play/gate1"
        stage={1}
        title="ひらがな"
        description="Hiragana the first challenger."
        videoSrc="/video/hiragana.mp4"
      />

      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
    </div>
  );
}
