interface Props {
  text: string;
}

export const SidebarButton = ({ text }: Props) => {
  return (
    <div className="py-0.5 px-1 hover:bg-neutral-300 cursor-pointer">
      {text}
    </div>
  );
};
