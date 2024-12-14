"use client";

import { PlayBox } from "@/components/play/play-box";
import { useKanaStore } from "@/stores/useKanaStore";

export default function Play() {
  const { setHiragana } = useKanaStore();

  return (
    <div className="w-full grid grid-cols-5 gap-2 py-2 pr-2 ">
      <PlayBox
        linkText="Play"
        href="/menu/play/gate1"
        stage={1}
        title="ひらがな"
        description="Hiragana the first challenger."
        videoSrc="hiragana.mp4"
        onClick={() => setHiragana(true)}
      />

      <PlayBox
        linkText="Coming Soon"
        href="/menu/play/gate2"
        stage={2}
        videoSrc="katakana.mp4"
        title="カタカナ"
        description="Katakana the second challenger."
        onClick={() => setHiragana(false)}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={3}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={4}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={5}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
      <PlayBox
        linkText="Coming Soon"
        href=""
        stage={2}
        title="Kanji"
        videoSrc="kanji.mp4"
        description="Get familiar with Kanji characters and expand your vocabulary in Japanese."
        disabled={true}
      />
    </div>
  );
}
