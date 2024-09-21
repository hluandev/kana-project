import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="h-full">
      <Nav />

      <div className="max-w-5xl mx-auto grid grid-cols-12 h-full mt-4 gap-4">
        <div className="col-span-3 grid grid-rows-3 h-full gap-4">
          <div className="border border-neutral-400">1</div>
          <div className="border border-neutral-400">2</div>
        </div>

        <div className="col-span-9 border border-neutral-400">
          <h1>Love is here</h1>
        </div>
      </div>
    </div>
  );
}
