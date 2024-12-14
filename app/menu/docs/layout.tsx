import { LeftDocs } from "@/components/docs/left-docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full py-4 pr-4">
      <div className="bg-white/10 border border-white/20   flex gap-4 h-full rounded-xl">
        <LeftDocs />
        <div className="w-full overflow-y-auto hideScroll py-4 pr-4">
          {children}
        </div>
      </div>
    </div>
  );
}
