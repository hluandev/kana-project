import { Main } from "@/components/Main";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="h-full grid grid-cols-12">
      <Nav />
      <Main />
    </div>
  );
}
