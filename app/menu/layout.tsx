import LeftBar from "@/components/left-bar";
import RightBar from "@/components/right-bar";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <LeftBar />
      <div className="flex-1 py-4">
        <div className="bg-[#161716] p-4 border border-neutral-800 h-full rounded-lg">
          {children}
        </div>
      </div>
      <RightBar />
    </div>
  );
}
