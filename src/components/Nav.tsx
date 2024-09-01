import { DragHandleDots2Icon } from "@radix-ui/react-icons";

interface Props {
  text: string;
}

export const Nav = ({ text }: Props) => {
  return (
    <button className="text-lg flex items-end justify-between w-full hover:text-white hover:underline">
      <p className="leading-none">{text}</p>

      <DragHandleDots2Icon />
    </button>
  );
};
