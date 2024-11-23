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
      className={`p-3 rounded-md font-bold cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
