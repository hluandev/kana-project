import { kanaData } from "@/actions/kana-data";
import Board from "@/components/board";

export default async function KanaPlayPage() {
  const kana_data = await kanaData();

  return (
    <div className="h-full">
      <Board kana_data={kana_data} />
    </div>
  );
}
