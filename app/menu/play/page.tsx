"use client";

import { PlayBox } from "@/components/play/play-box";
import { usePlayerStore } from "@/stores/usePlayerStore";

export default function Play() {
  const { info } = usePlayerStore();

  const gates = [
    {
      linkText: "Play",
      href: "/menu/play/gate1",
      stage: 1,
      title: "ひらがな",
      description: "Hiragana the first challenger.",
      videoSrc: "hiragana.mp4",
    },
    {
      linkText: "Coming Soon",
      href: "/menu/play/gate2",
      stage: 2,
      videoSrc: "katakana.mp4",
      title: "カタカナ",
      description: "Katakana the second challenger.",
    },
    {
      linkText: "Coming Soon",
      href: "/menu/play/",
      stage: 3,
      videoSrc: "kanji.mp4",
      comingSoon: true,
      title: "漢字",
      description: "Kanji the third challenger.",
    },
    {
      linkText: "Coming Soon",
      href: "/menu/play/",
      stage: 4,
      videoSrc: "kanji2.mp4",
      title: "TBD",
      description: "TBD",
    },
    // ... other gates configuration
  ];

  return (
    <div className="w-full max-lg:h-full grid lg:grid-cols-2 lg:gap-2 lg:py-2 lg:pr-2">
      {gates.map((gate, index) => (
        <PlayBox
          key={index}
          {...gate}
          disabled={gate.stage > (info.gate || 1)}
          href={gate.stage <= (info.gate || 1) ? gate.href : ""}
          linkText={gate.stage <= (info.gate || 1) ? gate.linkText : "Locked"}
        />
      ))}
    </div>
  );
}
