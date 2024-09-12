interface Props {
  text: string;
}

export const SidebarButton = ({ text }: Props) => {
  return <div className="py-2 px-3 rounded-md">{text}</div>;
};
