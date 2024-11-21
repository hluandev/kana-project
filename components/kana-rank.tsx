import { useKanaStore } from "@/store/useKanaStore";
import Card from "./card";

export default function KanaRank() {
  const { initKana } = useKanaStore();

  return (
    <Card className="grid grid-cols-5 gap-y-7 py-7 place-items-center">
      {initKana.map((item) => (
        <div className="text-2xl">
          <p>{item.japanese}</p>
        </div>
      ))}
    </Card>
  );
}
