import { LeftDocs } from "@/components/docs/left-docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full pr-4 ">
      <div className="bg-white/50 p-4 flex gap-4 h-full rounded-2xl">
        <LeftDocs />
        <div className="w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
