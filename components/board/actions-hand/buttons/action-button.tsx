interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const ActionButton = ({
  text,
  onClick,
  className,
}: ActionButtonProps) => {
  return (
    <div
      className={`py-3 w-36 text-center rounded-md font-bold cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
