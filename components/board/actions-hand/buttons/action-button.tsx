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
    <div className={`p-3 rounded-md font-bold ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};
