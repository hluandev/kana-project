import { LeftDocs } from "@/components/docs/left-docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <div className="bg-white border border-black/15 shadow-sm flex gap-4 h-full rounded-2xl">
        <LeftDocs />
        <div className="w-full overflow-y-auto hideScroll py-4 pr-4">
          {children}
        </div>
      </div>
    </div>
  );
}
