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
      <p>
        Kamikani is a mix of Balatro, Poker, and Japanese. If you already know
        how to play Balatro, you&apos;re halfway there. This game will feel
        familiar, with a few tweaks to fit the Japanese theme.
      </p>
      <p>
        If you&apos;re completely new, don&apos;t worry! We&apos;ll explain
        everything. It&apos;s very simple to learn.
      </p>
    </Doc>
  );
}