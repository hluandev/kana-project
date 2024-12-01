import { Doc } from "@/components/docs/doc";

export default function Docs() {
  return (
    <Doc mxAuto title="1. Introduction">
      <div>
        <h1 className="text-4xl font-semibold">Welcome to Kamikani</h1>
        <h2 className="text-xl font-medium">
          Here you will find all the information you need to know about the
          game.
        </h2>
      </div>
      <p>
        Kamikani is a combination of Balatro, Poker and Japanese, so if you
        already known Balatro, you already known this game, but there are some
        tweaks here and there to fit with Japanese.
      </p>
      <p>
        If you are completely new to this game, don&apos;t worry, we will
        explain everything to you. It is very simple to learn.
      </p>
    </Doc>
  );
}
