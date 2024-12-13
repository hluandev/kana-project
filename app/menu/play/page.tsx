import { PlayBox } from "@/components/play/play-box";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Play() {
  return (
    <div className="w-full grid grid-cols-5 gap-2 py-2 pr-2 ">
      <PlayBox
        linkText="Play"
        href="/menu/play/gate1"
        stage={1}
        title="ひらがな"
        description="Hiragana the first challenger."
        videoSrc="/video/hiragana2.mp4"
      />

      <PlayBox
        linkText="Coming Soon"
        href="/menu/play/gate2"
        stage={2}
        videoSrc="/video/dragon.mp4"
        title="カタカナ"
        description="Katakana the second challenger."
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={3}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={4}
        title="Kanji"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={5}
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
