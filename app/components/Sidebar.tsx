import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  return (
    <div className="col-span-2 p-5 space-y-0.5">
      <div className="relative border border-neutral-400 py-2 h-full">
        <p className="absolute -top-3 left-1.5 bg-white px-1.5">Tools</p>
        <div className="p-2 space-y-1">
          <SidebarButton text="ascii art" />
        </div>
      </div>
    </div>
  );
};
