import "./App.css";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="h-full grid grid-cols-12">
      <div className="border-r space-y-6 border-neutral-700 col-span-2 p-4">
        <h1 className="text-xl font-bold tracking-wider">OFALL.APP</h1>

        <div className="flex flex-col items-start gap-6">
          <Nav text="notes" />
          <Nav text="messages" />
          <Nav text="audio" />
          <Nav text="videos" />
          <Nav text="board" />
        </div>
      </div>

      <div className="p-4">Love</div>
    </div>
  );
}

export default App;
