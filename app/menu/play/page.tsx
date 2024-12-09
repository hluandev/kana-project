import { PlayBox } from "@/components/play/play-box";
import { ArrowRight } from "lucide-react";

export default function Play() {
  return (
    <div className="z-10 gap-2 lg:gap-8 flex justify-center items-center">
      <PlayBox
        linkText="Play"
        href="/menu/play/kana"
        stage={1}
        title="Kana"
        description="Get to know Hiragana and Katakana, the two essential Japanese syllabaries."
      />
      <ArrowRight width={24} height={24} className="text-black/60" />
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
