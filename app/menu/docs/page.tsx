import { Doc } from "@/components/docs/doc";

export default function Docs() {
  return (
    <Doc mxAuto title="1. Introduction">
      <div>
        <h1 className="text-xl font-semibold">Welcome to Kamikana</h1>
      </div>

      <h2 className="">
        Here&apos;s everything you need to know about the game!
      </h2>

      <div className="aspect-w-16 aspect-h-9 my-4">
        <iframe
          src="https://www.youtube.com/embed/W6X5C2eYb70"
          title="Kamikana Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[315px] rounded-lg"
        ></iframe>
      </div>

      <p>
        Kamikani is a mix of Balatro, Poker, and Japanese. If you already know
        how to play Balatro, you&apos;re halfway there. This game will feel
        familiar, with a few tweaks to fit the Japanese theme.
      </p>
      <p>
        If you&apos;re completely new, don&apos;t worry! We&apos;ll explain
        everything. It&apos;s very simple to learn. Within a few rounds,
        you&apos;ll be a pro! and hope you got addicted to it.
      </p>
      <p>
        When you play this game, focus on winning the rounds. Naturally, as you
        go through the game, the Japanese you type will stick in your memory
        without needing to study it directly.
      </p>
    </Doc>
  );
}
