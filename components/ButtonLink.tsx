interface Props {
  text: string;
}

export const ButtonLink = ({ text }: Props) => {
  return <button>{text}</button>;
};
